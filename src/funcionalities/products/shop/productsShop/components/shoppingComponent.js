/**
 * Componente com a funcionalidade de renderizar
 * um unico produto vendido no ecommerce
 */
import React from 'react'
import ProductsContainer from '../container/shopping/shopping.container'
import { connect } from 'react-redux'
import AddCartContainer from '../container/icons/addCart'

const ShoppingComponent = props => {
    return (
        <>
            <ProductsContainer />
            {
                props.products.map((item, index) => (
                    < div className="col-lg-4 col-md-6" key={index}>
                        <div className="single-product">
                            <img className="img-fluid" src={
                                item.media.media[0]} alt="img"/>
                            <div className="product-details">
                                <h6>{item.name}</h6>
                                <div className="price">
                                    <h6>{item.price.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })
                                    }</h6>
                                    <h6 className="l-through">{item.promotion}</h6>
                                </div>
                                <div className="prd-bottom">
                                    <AddCartContainer itens={item} />
                                    <div className="social-info">
                                        <span className="lnr lnr-heart"></span>
                                        <p className="hover-text">Favoritos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
const mapStateToProps = store => ({ products: store.products.shopping })
export default connect(mapStateToProps)(ShoppingComponent)