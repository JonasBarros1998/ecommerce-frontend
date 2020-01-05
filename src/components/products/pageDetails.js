/*
Pagina para especificar reinderizar todos os compoennte da pasta products e formar pa 
pagina onde setá mostrada apenas um produto*/

import React from 'react'
import { connect } from 'react-redux'

/*Imports components*/
import Menu from '../menu/MenuComponent'
import CartComponent from '../cart/cartComponent'
import NavTabs from './productsDetails/navTabs/navTabs'
import BannerCrumb from '../banner/bannerCrumbComponent'
import SlideProductComponent from '../slide/slideProductComponent'
import ReviewComponent from '../reviews/listReviews/reviewComponent'
import NewReviewComponent from '../comments/newReviewComponent'
import ProductContainer from '../../funcionalities/products/container/product.container'
import DescriptionComponent from './productsDetails/description&Especification&Info/descriptionComponent'
import InfoProductComponent from './productsDetails/description&Especification&Info/infoProductComponent'
import EspecificationComponent from './productsDetails/description&Especification&Info/especificationComponent'

const ProductDetails = props => {
    const { pathname } = props.location
    const { product } = props

    return (
        <>
            {/* Parte 1: Esse componente, está alocado em um container, 
               Ele faz a chamada para a função listingProductDetails(),
               Essa função tem a responsabilidade de fazer a chamada para uma API*/}
            <ProductContainer pathname={pathname} />
            <div>
                <BannerCrumb />
                <Menu />

                {/* Parte 2: Area responsavel pelo slide, informações 
                gerais do produto(preço, pequena descrição e adicionar ao 
                carrinho)*/}
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-lg-6">
                                <SlideProductComponent />
                            </div>

                            <div className="col-lg-5 offset-lg-1">
                                <div className="s_product_text">
                                    <InfoProductComponent infoProduct = {product} />
                                    <CartComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/*FINAL, parte 2*/}

                {/* Parte 3: Area reponsavel pelos reviews, descrição e especificação 
                de cada produto*/}
                <section className="product_description_area">
                    <div className="container">
                        <NavTabs />
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                aria-labelledby="home-tab">
                                    {
                                        product.map((itensProduct, index) => (
                                           <DescriptionComponent key={index} descriptionProduct = {itensProduct.products.fullDescription} />
                                        ))
                                    }
                            </div>

                            <div className="tab-pane fade" id="profile" role="tabpanel"
                                aria-labelledby="profile-tab">
                                {
                                    product.map((itensProduct, index) => {
                                        const productEspecification = itensProduct.products.especification
                                        return <EspecificationComponent key = {index} 
                                                    especification = {productEspecification} />
                                    })
                                }
                            </div>

                            <div className="tab-pane fade" id="review" role="tabpanel"
                                aria-labelledby="review-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="comment_list">
                                            <ReviewComponent />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="review_box">
                                            <NewReviewComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> {/*FINAL, parte 3*/}
            </div>
        </>
    );
}

const mapStateToProps = store => ({ product: store.productDetails.product })

export default connect(mapStateToProps)(ProductDetails)