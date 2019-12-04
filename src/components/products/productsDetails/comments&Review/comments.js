import React, { Component } from 'react'

class ComentsReviewComponent extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="comment_list">
                    <div className="review_item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Blake Ruiz</h4>
                                <h5>12th Feb, 2018 at 05:56 pm</h5>
                                <a className="reply_btn" href={"localhost://3000"}>Reply</a>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComentsReviewComponent