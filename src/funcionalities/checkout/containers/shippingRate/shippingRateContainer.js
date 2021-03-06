import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listingProducts } from '../../actions/listingProducts/listProducts.action'

const ShippingRateContainer = props => {

    useEffect(() => {
        props.listingProducts()
    })

    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ listingProducts }, dispatch)
export default connect(null, mapDispatchToProps)(ShippingRateContainer)