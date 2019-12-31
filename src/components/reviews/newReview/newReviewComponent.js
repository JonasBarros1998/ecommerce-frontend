import React from 'react'

const NewReviewComponent = () => {

    return (
        <>
        <h3 className="mb-3 text_h3">Adicione uma avalição</h3>
        <p>Escolha uma nota</p>
        <ul className="list">
            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
        </ul>

        <form className="row contact_form" method="post"
            id="contactForm">

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
        </>
    );
}

export default NewReviewComponent