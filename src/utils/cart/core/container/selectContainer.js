import React, { useState, useEffect } from 'react'
import { decrement, total } from '../services/total'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateProduct } from '../controllers/updateProduct'

const SelectContainer = props => {

    const [quantity, setQuantity] = useState(1)

    useEffect(() =>{
        if(props.itemCart.quantity === undefined){
            setQuantity(1)
        }else{
            setQuantity(props.itemCart.quantity)
        }
    }, [props.itemCart.quantity])

    //Adicionar a quantidade de um produto 
    const add = (itemCart) => {
        let valueCurrent = quantity + 1
        setQuantity(valueCurrent)
        updateProduct(itemCart, valueCurrent)
    }

    //Subtrair a quantidade de um produto
    const decrement = (itemCart) => {
        let decrementValue = quantity - 1
        if (decrementValue < 1) {
            setQuantity(1)
            updateProduct(itemCart, 1)
        } else {
            setQuantity(decrementValue)
            updateProduct(itemCart, decrementValue)

        }
    }

    return (
        <div className="product_count">
            <input type="text" name="qty" id={`sst-${props.itemCart._id}`} maxLength="3"
                title="Quantity:" className="count-quantity"
                value={ quantity }
                onChange={() => { }} />

            <button
                className="increase items-count"
                onClick={
                    () => {
                        add(props.itemCart)
                        props.total([], props.itemCart.price)
                    }}>
                <i className="lnr lnr-chevron-up"></i>
            </button>


            <button
                className="reduced items-count"
                value={quantity}
                onClick={() => {
                    decrement(props.itemCart)
                    props.decrement(props.itemCart.price, quantity)
                }}>
                <i className="lnr lnr-chevron-down"></i>
            </button>
        </div>
    )
}

const mapDisptachToProps = dispatch => bindActionCreators({ total, decrement }, dispatch)
export default connect(null, mapDisptachToProps)(SelectContainer) 