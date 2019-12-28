/*
Pagina para especificar reinderizar todos os compoennte da pasta products e formar pa 
pagina onde setá mostrada apenas um produto
*/

import React from 'react'

/*Imports components*/
import InfoProductComponent from './productsDetails/description&Especification&Info/infoProductComponent'
import CartComponent from '../cart/cartComponent'
import NavTabs from './productsDetails/navTabs/navTabs'
import DescriptionComponent from './productsDetails/description&Especification&Info/descriptionComponent'
import EspecificationComponent from './productsDetails/description&Especification&Info/especificationComponent'
import ReviewComponent from '../reviews/listReviews/reviewComponent'
import NewReviewComponent from '../reviews/newReview/newReviewComponent'
import SlideProductComponent from '../slide/slideProductComponent'
import Menu from '../menu/MenuComponent'
import BannerCrumb from '../banner/bannerCrumbComponent'

const ProductDetail = () => {

    return (
        <div>
            <BannerCrumb />
            <Menu />
            {/* area responsavel pelo slide, informações gerais do produto(preço, pequena descrição, adcionar ao carrinho)*/}
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <SlideProductComponent />
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <InfoProductComponent />
                                <CartComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*area reponsavel pelos reviews, descrição e especificação de cada produto*/}
            <section className="product_description_area">
                <div className="container">
                    <NavTabs />
                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade" id="home" role="tabpanel"
                            aria-labelledby="home-tab">
                            <DescriptionComponent />
                        </div>

                        <div className="tab-pane fade" id="profile" role="tabpanel"
                            aria-labelledby="profile-tab">
                            <EspecificationComponent />
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
                                        <h3 className="mb-3 text_h3">Adicione uma avalição</h3>
                                        <p>Escolha uma nota</p>
                                        <ul className="list">
                                            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                                            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                                            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                                            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                                            <li><a href={"localhost://"}><i className="fa fa-star"></i></a></li>
                                        </ul>
                                        <NewReviewComponent />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProductDetail