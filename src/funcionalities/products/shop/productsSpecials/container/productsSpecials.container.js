import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { productSpecials } from '../action/productsSpecials.action'

const ProductsSpecialsContainer = props => {
    const {productSpecials} = props
    useEffect(() => {
        productSpecials()
    })
    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({ productSpecials }, dispatch))
export default connect(null, mapDispatchToProps)(ProductsSpecialsContainer)