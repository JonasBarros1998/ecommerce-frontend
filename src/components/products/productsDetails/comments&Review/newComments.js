import React, { Component } from 'react'

export default class NewComment extends Component {

    render() {

        return (
            <div className="col-lg-6">
                {/*<Review />*/}
                
                <div className="review_box">
                    <h5>Adicionar novo comentario</h5>
                    <form className="row contact_form" method="post"
                        id="contactForm">

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name"
                                    placeholder="Your Full name" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email"
                                    placeholder="Email Address" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="number" name="number"
                                    placeholder="Phone Number" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" rows="1"
                                    placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}