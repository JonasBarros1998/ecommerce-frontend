import React from 'react'
const SelectContainer = props => {

    return (
        <div className="product_count">
            <input type="text" name="qty" id="sst" maxlength="12"
                title="Quantity:" className="count-quantity"
                value={
                    props.quantity === undefined ? 1
                        : props.quantity
                }
                onChange={(event) => props.quantity(event, props.id)} />
            <button
                className="increase items-count" type="button" onClick={() => props.sumQuantity(props.productId, props.valueCart)}>
                <i className="lnr lnr-chevron-up"></i>
            </button>

            <button
                className="reduced items-count" type="button"
                onClick={() => props.subQuantity(props.productId, props.valueCart)}>
                <i className="lnr lnr-chevron-down"></i>
            </button>
        </div>
    )
}
export default SelectContainer