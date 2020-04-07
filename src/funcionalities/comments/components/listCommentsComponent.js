import React from 'react'
import { connect } from 'react-redux'
import ListCommentContainer from '../container/list.container'
import { Star } from '../../../utils/stars'

const ListCommentsComponent = props => {
    const { comments, products } = props
    return (
        <>
            {/*Container para chamar a função na qual faz a chamada 
            para api requisitando os comentario dos produtos */
                products.map((item, index) => (
                    <ListCommentContainer key={index} productId={item.products.id} />
                ))
            }
            <div className="col-lg-6">
                <div className="comment_list">
                    <div className="row total_rate">
                        <div className="col-6">
                            <div className="box_total">
                                <h5>Média geral</h5>
                                <h4>{isNaN(comments.media) === true ? 'S/N' : comments.media}</h4>
                                {/**Tivemos que usar o comments.media como validação, porque se tiver uma media, então 
                                 * quer dizer que temos um comentario. 
                                 * Não usamos o comments.length porque mesmo quando o comments estiver vazio
                                 * o comments.length vai estar nos retornando 1
                                 */}
                                <h6>({isNaN(comments.media) === true ? '0' : comments.length}) {comments.length <= 1 ? 'avaliação' : 'avaliações'}</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="rating_list">
                                {/**Tivemos que usar o comments.media como validação, porque se tiver uma media, então 
                                 * quer dizer que temos um comentario. 
                                 * Não usamos o comments.length porque mesmo quando o comments estiver vazio
                                 * o comments.length vai estar nos retornando 1
                                 */}
                                <h3 className="mb-3 text_h3">Baseado em {isNaN(comments.media) === true ? 0 : comments.length} {comments.length <= 1 ? 'avaliação' : 'avaliações'}</h3>
                                <ul className="list">
                                    <li><small>
                                        <Star className="fa fa-star color-stars-active"
                                            note={5}></Star>
                                        <span className="ml-2">{comments.fiveStar ? comments.fiveStar : '0'} avaliação</span></small></li>
                                    <li><small>
                                        {<Star className="fa fa-star color-stars-active"
                                            note={4}></Star>}
                                        <span className="ml-2">{comments.fourStar ? comments.fourStar : '0'} avaliação</span></small></li>
                                    <li><small>
                                        {<Star className="fa fa-star color-stars-active"
                                            note={3}></Star>}
                                        <span className="ml-2">{comments.threeStar ? comments.threeStar : '0'} avaliação</span></small></li>
                                    <li><small>
                                        {<Star className="fa fa-star color-stars-active"
                                            note={2}></Star>}
                                        <span className="ml-2">{comments.twoStar ? comments.twoStar : '0'} avaliação</span></small></li>
                                    <li><small>
                                        {<Star className="fa fa-star color-stars-active"
                                            note={1}></Star>}
                                        <span className="ml-2">{comments.oneStar ? comments.oneStar : '0'} avaliação</span></small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        comments.map((itemComment, index) => {  
                            return (<>
                                <div className="review_item padding_top_bottom_1" key={index}>
                                    <div className="media">
                                        <div className="media-body">
                                            <h4>{itemComment.username}</h4>
                                                <h5>{itemComment.date}</h5>
                                            <Star
                                                className="fa fa-star color-stars-active"
                                                note={itemComment.avaliation}>
                                            </Star>
                                        </div>
                                    </div>
                                    <p>{itemComment.comment}</p>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
        </>
    );
}
const mapStateToProps = store => ({ comments: store.listingComment.comments, products: store.productDetails.product })
export default connect(mapStateToProps)(ListCommentsComponent)