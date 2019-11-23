import React, { Component } from 'react'

class InfoProductComponent extends Component {

    render() {

        return (

            <div>
                <h3>Faded SkyBlu Denim Jeans</h3>
                <h2>$149.99</h2>

                <ul className="list">
                    <li><a className="active" href="#"><span>Categoria</span> : Household</a></li>
                    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                </ul>

                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                       something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
						               during the winter.</p>

                <div className="product_count">
                    <label>Quantidade:</label>
                    <input type="text" name="qty" className="input-text qty" />

                    <button className="increase items-count" type="button">
                        <i className="lnr lnr-chevron-up"></i></button>

                    <button className="reduced items-count" type="button">
                        <i className="lnr lnr-chevron-down"></i></button>
                </div>
            </div>
        );
    }
}


export default InfoProductComponent