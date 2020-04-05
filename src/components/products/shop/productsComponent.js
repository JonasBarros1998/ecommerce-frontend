/**
 * Componente para listagem dos principais  ou os novos produtos 
 * vendidos no ecommerce. Esse componente é renderizado na pagina inicial do ecommerce
 */
import React from 'react'
import { connect } from 'react-redux'
import MainProducts from '../../../funcionalities/products/shop/mainProducts/containers/mainProduct.container'
import ActionsProductsContainer from '../../../funcionalities/products/shop/mainProducts/containers/actionsProducts.container'
import { Link } from 'react-router-dom'

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
                                <h1>Principais produtos</h1>
                                <p>Veja os principais produtos vendidos pela 
                                    J&M ecommerce
                                </p>
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
                                            <Link to={`/item/${item.categorie}/${item.name.replace(/ /gi, "_")}/${item.productId}`}
                                            style={{textDecoration:"none"}}>
                                                <h6 className="color-black">{item.name}</h6>
                                            </Link>

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
                                            <ActionsProductsContainer itemProdut={item} />
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