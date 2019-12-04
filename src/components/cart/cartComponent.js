import React, { Component } from 'react'

class CartComponent extends Component {

    render() {
        return (
            <div className="card_area d-flex align-items-center">
                <a className="primary-btn" href={"http://localhost:3000"}>Add to Cart</a>
                <a className="icon_btn" href={"http://localhost:3000"}><i className="lnr lnr lnr-diamond"></i></a>
                <a className="icon_btn" href={"http://localhost:3000"}><i className="lnr lnr lnr-heart"></i></a>
            </div>

        );
    }
}

export default CartComponent