import React from 'react'

const ReviewComponent = () => {

    return (
        <>
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

            <div className="review_item">
                <div className="media">
                    <div className="media-body">
                        <h4>Blake Ruiz</h4>
                        <h5>12th Feb, 2018 at 05:56 pm</h5>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            </div>
        </>
    );
}

export default ReviewComponent