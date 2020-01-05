import React from 'react'

const CommentContainer = () => {

    return (
        <form className="row contact_form" method="post"
            id="contactForm" onSubmit={""}>

            <div className="col-md-12">
                <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="1"
                        placeholder="Mensagem"></textarea>
                </div>
            </div>

            <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="genric-btn success">Comentar</button>
            </div>
        </form>
    )
}

export default CommentContainer