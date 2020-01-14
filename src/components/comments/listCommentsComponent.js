import React from 'react'
import { connect } from 'react-redux'
import ListCommentContainer from '../../funcionalities/comments/container/list.container'
import { convertDate } from '../../utils/dates/date'
import { Star } from '../../utils/stars'

const ListCommentsComponent = props => {
    const { comments, products } = props
    return (
        <>
            {/*Container para chamar a função na qual faz a chamada 
            para api requisitando os comentario dos produtos */
                products.map((IdProduct, index) => (
                    <ListCommentContainer key={index} productId={IdProduct.products.id} />
                ))
            }
            <div className="col-lg-6">
                <div className="comment_list">
                    <div className="row total_rate">
                        <div className="col-6">
                            <div className="box_total">
                                <h5>Média geral</h5>
                                <h4>{comments.media}</h4>
                                <h6>({comments.length}) {comments.length <= 1 ? 'avaliação' : 'avaliações'}</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="rating_list">
                                <h3 className="mb-3 text_h3">Baseado em {comments.length} {comments.length <= 1 ? 'avaliação' : 'avaliações'}</h3>
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
                            //Converter a data para o formato nacional
                            const datenow = convertDate(itemComment.date, { format: 'PT_BR' })
                            return (<>
                                <div className="review_item padding_top_bottom_1" key={index}>
                                    <div className="media">
                                        <div className="media-body">
                                            <h4>{itemComment.name}</h4>
                                            <h5>{datenow}</h5>
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