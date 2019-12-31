import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { listingProductDetails } from '../actions/product.action'

const ProductContainer = props => {
    const { pathname } = props
    const { listingProductDetails } = props

    useEffect(() => {
        listingProductDetails(pathname)
    })
    return (
        <>
        </>
    )
}

const Quantity = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <label>Quantidade:</label>
            <input className="input-text qty"
                type="number"
                name="quantity"
                required
                ref={(stateQuantity) => setQuantity(quantity)}
            />
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({ listingProductDetails }, dispatch))
export default connect(null, mapDispatchToProps)(ProductContainer)
export { Quantity }