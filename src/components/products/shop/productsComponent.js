import React from 'react'
import { connect } from 'react-redux'
import MainProducts from '../../../funcionalities/products/shop/mainProducts/containers/mainProduct.container'
import ActionsProductsContainer from '../../../funcionalities/products/shop/mainProducts/containers/actionsProducts.container'

const Products = props => {
    const { products } = props

    return (
        <section className="owl-carousel active-product-area section_gap">
            <MainProducts />
            <div className="single-product-slider">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h1>Latest Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed 
                            o eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            products.map((item, index) => {
                                return (<div className="col-lg-3 col-md-6" key={index}>
                                    <div className="single-product">
                                        <img className="img-fluid" src={item.link} alt="" />
                                        <div className="product-details">
                                            <h6>{item.name}</h6>
                                            <div className="price">
                                                <h6>{
                                                    item.price.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })
                                                }</h6>
                                                <h6 className="l-through">{
                                                    item.price.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })
                                                }</h6>
                                            </div>
                                            { /**
                                                 * Componente para adicionar o produto  ao carrinho e para os favoritos
                                             **/ }

                                            <ActionsProductsContainer itemProdut = {item} />
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = store => ({ products: store.mainProduct.listProducts })
export default connect(mapStateToProps)(Products)