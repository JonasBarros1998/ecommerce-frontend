import React from 'react'
import CommentContainer from '../../funcionalities/comments/container/comment.container'

const NewCommentComponent = props => {
    const { productId } = props
    return (
        <>
            <div className="col-lg-6">
                <div className="review_box">


                    <h3 className="mb-3 text_h3">Adicione uma avalição</h3>
                    <p>Escolha uma nota</p>
                    <ul className="list">
                        <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                        <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                        <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                        <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                        <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                    </ul>
                    <CommentContainer productId={productId} />
                </div>
            </div>
        </>
    );
}

export default NewCommentComponent