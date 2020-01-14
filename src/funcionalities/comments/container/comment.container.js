import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions/comment.action.js'
import { bindActionCreators } from 'redux'

const CommentContainer = props => {
    const { productId } = props
    const { saveComment } = props
    const [message, setMessage] = useState("")

    return (
        <form className="row contact_form" method='post'
            id="contactForm" onSubmit={e => {
                e.preventDefault();
                saveComment({
                    comments: message.value,
                    product: productId
                })
            }}>

            <div className="col-md-12">
                <div className="form-group">
                    <textarea className="form-control" name="message"
                        id="message" rows="1" placeholder="Mensagem"
                        ref={(stateMessage) => setMessage(message => message = stateMessage)}
                    ></textarea>
                </div>
            </div>

            <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="genric-btn success">Comentar</button>
            </div>
        </form>
    )
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ saveComment }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentContainer)