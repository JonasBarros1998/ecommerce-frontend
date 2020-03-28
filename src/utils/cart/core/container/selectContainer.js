import React, { useState } from 'react'
import { decrement, total } from '../services/total'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const SelectContainer = props => {

    const [quantity, setQuantity] = useState(1)

    //Adicionar a quantidade de um produto 
    const add = () => {
        let valueCurrent = quantity + 1
        setQuantity(valueCurrent)
    }

    //Subtrair a quantidade de um produto
    const decrement = () => {
        let decrementValue = quantity - 1
        if (decrementValue < 1) {
            setQuantity(1)
        } else {
            setQuantity(decrementValue)
        }
    }

    return (
        <div className="product_count">
            <input type="text" name="qty" id={`sst-${props.itemCart._id}`} maxLength="3"
                title="Quantity:" className="count-quantity"
                value={quantity}
                onChange={() => { }} />

            <button
                className="increase items-count"
                onClick={
                    () => {
                        add(quantity)
                        props.total([], props.itemCart.price)
                    }}>
                <i className="lnr lnr-chevron-up"></i>
            </button>


            <button
                className="reduced items-count"
                value={quantity}
                onClick={() => {
                    decrement(quantity)
                    props.decrement(props.itemCart.price, quantity)
                }}>
                <i className="lnr lnr-chevron-down"></i>
            </button>
        </div>
    )
}

const mapDisptachToProps = dispatch => bindActionCreators({ total, decrement }, dispatch)
export default connect(null, mapDisptachToProps)(SelectContainer) 