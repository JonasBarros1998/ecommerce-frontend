import React from 'react'
import CommentContainer from '../container/comment.container'

const NewCommentComponent = props => {
    const { product } = props
    return (<>
        <div className="col-lg-6">
            <div className="review_box">
                <h3 className="mb-3 text_h3 text_comment">Adicione uma avalição</h3>
                <p>Escolha uma nota</p>
                {
                    product.map((itemProduct, index) => (
                        <CommentContainer key = {index} productId={itemProduct.products.id} />
                    ))
                }
            </div>
        </div>
    </>);
}
export default NewCommentComponent