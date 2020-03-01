/**
 * Container responsavel por renderizar a função para chamada 
 * da action que traz os produtos cadastrados no banco de dados
 */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { products } from '../../action/shopping/product.action'

const ProductsContainer = props => {
    useEffect(() => {
        props.products()
    })
    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ products }, dispatch)
export default connect(null, mapDispatchToProps)(ProductsContainer)