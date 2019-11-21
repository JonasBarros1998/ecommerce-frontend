import React, { Component } from 'react'
/* slide do produto */

/*Imports components*/
import InfoProductComponent from '../productsDetails/infoProductComponent'
import CartComponent from '../cart/cartComponent'
import NavTabs from '../productsDetails/navTabs'
import DescriptionComponent from '../productsDetails/descriptionComponent'
import EspecificationComponent from '../productsDetails/especificationComponent'
import Comments from './comments&Review/comments'
import NewComment from './comments&Review/newComments'

class ProductDetail extends Component {
    render() {
        return (
            <div>

                {/* area responsavel pelo slide, informações gerais do produto(preço, pequena descrição, adcionar ao carrinho)*/}
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-lg-6">
                                <h3>Slides do produto</h3>
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

                    {/*area reponsavel pelos comentatios, review, descrição e especificação*/}
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

export default ProductDetail