import React, { Component } from 'react'

class InfoProductComponent extends Component {

    constructor(){
        super()
        this.state = {quantity: 1 }
    }

    stateInputs(inputName, event){
        const field = {}
        field[inputName] = event.target.value
        this.setState(field)
    }
    
    render() {

        return (
            <div>
                <h3>Faded SkyBlu Denim Jeans</h3>
                <h2>$149.99</h2>

                <ul className="list">
                    <li><a className="active" href={"http://localhost:3000"}><span>Categoria</span> : Household</a></li>
                    <li><a href={"http://localhost:3000"}><span>Availibility</span> : In Stock</a></li>
                </ul>

                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                       something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
						               during the winter.</p>

                <div className="product_count">
                    <label>Quantidade:</label>
                    <input type="number" name="quantity" className="input-text qty" 
                    value={this.state.quantity} onChange={this.stateInputs.bind(this, 'quantity')} />
                </div>
            </div>
        );
    }
}


export default InfoProductComponent