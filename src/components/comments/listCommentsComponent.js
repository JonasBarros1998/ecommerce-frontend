import React from 'react'
import { connect } from 'react-redux'
import ListCommentContainer from '../../funcionalities/comments/container/list.container'
import {convertDate} from '../../utils/dates/date'

const ListCommentsComponent = props => {
    const { comments } = props


    return (
        <>
            {/*Container para chamar a função na qual faz a chamada 
                para api requisitando os comentario dos produtos */}
            <ListCommentContainer />
            <div className="col-lg-6">
                <div className="comment_list">

                    <div className="row total_rate">
                        <div className="col-6">
                            <div className="box_total">
                                <h5>Média geral</h5>
                                <h4>4.0</h4>
                                <h6>(03 Avaliações)</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="rating_list">
                                <h3 className="mb-3 text_h3">Baseado em 3 avaliações</h3>
                                <ul className="list">
                                    <li><small>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow mr-2"></i>
                                        01 avaliação</small ></li>

                                    <li><small>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow mr-2"></i>
                                        01 avaliação</small></li>

                                    <li><small>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow mr-2"></i>
                                        01 avaliação</small></li>

                                    <li><small>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow mr-2"></i>
                                        01 avaliação</small></li>

                                    <li><small>
                                        <i className="fa fa-star yellow mr-2"></i>
                                        01 avaliação</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        comments.map((itemComment, index) => {
                            const datenow = convertDate(itemComment.date, {format: 'PT_BR'})
                            console.log(datenow)
                            return <div className="review_item" key={index}>
                                <div className="media">
                                    <div className="media-body">
                                        <h4>{itemComment.name}</h4>
                                        <h5>
                                            {datenow}
                                        </h5>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <p>{itemComment.comment}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

const mapStateToProps = store => {
    return {
        comments: store.listingComment.comments
    }
}

export default connect(mapStateToProps)(ListCommentsComponent)