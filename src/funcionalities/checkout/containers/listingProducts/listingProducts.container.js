/**
 * Esse container tem como responsabilidade de renderizar a lista completa de produtos.
 */
import React, { useEffect } from "react"
import { listingProducts } from '../../actions/listingProducts/listProducts.action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ListingProductsContainer = props => {
    useEffect(() => {
        props.listingProducts()
    })
    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ listingProducts }, dispatch)
export default connect(null, mapDispatchToProps)(ListingProductsContainer)