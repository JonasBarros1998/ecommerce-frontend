import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions/comment.action.js'
import { bindActionCreators } from 'redux'
import { Star } from '../../../utils/stars'

const CommentContainer = props => {
    const { saveComment, productId } = props
    const [comment, setComment] = useState("")
    const [avaliation, setAvaliation] = useState("")

    useEffect(() => {
        const icons = document.querySelectorAll(`.stars-active`)
        for (let index = 0; index < icons.length; index++) {
            icons[index].addEventListener('click', () => {
                setAvaliation(index + 1)
                for (let color = index; color >= 0; color--) {
                    icons[color].style.color = "yellow"
                }
            })
        }
    })

    return (
        <>
            <ul className="list">
                <li><a href={"localhost://"} className="icon-stars">
                    <Star className="fa fa-star stars stars-active"
                        note={5}></Star>
                </a></li>
            </ul>
            <form className="row contact_form" method='post'
                id="contactForm" onSubmit={e => {
                    e.preventDefault();
                    saveComment({
                        comment: comment.value,
                        product: productId,
                        avaliation: avaliation
                    })
                }}>
                <div className="col-md-12">
                    <div className="form-group">
                        <textarea className="form-control" name="message"
                            id="message" rows="1" placeholder="Mensagem"
                            ref={(stateComment) => 
                                setComment(comment => comment = stateComment)}
                        ></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <button type="submit" value="submit" className="genric-btn success">Comentar</button>
                </div>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({ saveComment }, dispatch))
export default connect(null, mapDispatchToProps)(CommentContainer)