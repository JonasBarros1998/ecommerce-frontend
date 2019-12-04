/*
Pagina para especificar reinderizar todos os compoennte da pasta products e formar pa 
pagina onde setá mostrada apenas um produto
*/

import React, { Component } from 'react'

/*Imports components*/
import InfoProductComponent from './productsDetails/description&Especification&Info/infoProductComponent'
import CartComponent from '../cart/cartComponent'
import NavTabs from './productsDetails/navTabs/navTabs'
import DescriptionComponent from './productsDetails/description&Especification&Info/descriptionComponent'
import EspecificationComponent from './productsDetails/description&Especification&Info/especificationComponent'
import Comments from './productsDetails/comments&Review/comments'
import NewComment from './productsDetails/comments&Review/newComments'
import SlideProductComponent from '../slide/slideProductComponent'
import Menu from '../menu/MenuComponent'
import BannerCrumb from '../banner/bannerCrumbComponent'

export default class ProductDetail extends Component {

    render() {
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

                {/*area reponsavel pelos comentatios, review, descrição e especificação de cada produto*/}
                <section className="product_description_area">
                    <div className="container">
                        <NavTabs />
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <DescriptionComponent />
                            </div>

                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <EspecificationComponent />
                            </div>

                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    <Comments />
                                    <NewComment />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}