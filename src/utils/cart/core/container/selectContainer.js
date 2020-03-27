import React, { useState } from 'react'
import { sumQuantity, total } from '../services/total'
import ValueTotal from '../container/valueTotal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const SelectContainer = props => {

    const [quantity, setQuantity] = useState(1)
    const item = props.itemCart


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
            <input type="text" name="qty" id="sst" maxLength="3"
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
                onClick={() => decrement()}>
                <i className="lnr lnr-chevron-down"></i>
            </button>
        </div>
    )
}

const mapDisptachToProps = dispatch => bindActionCreators({ total }, dispatch)
export default connect(null, mapDisptachToProps)(SelectContainer) 