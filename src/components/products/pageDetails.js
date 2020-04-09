/** Esse componente é responsavel para alocar todos os componentes da pagina de 
 * detalhes de produtos, podemos dizer que é o "centro nervoso" da pagina detalhes de produtos
 */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
/*Imports components*/
import Menu from '../menu/MenuComponent'
import NavTabs from './productsDetails/navTabs/navTabs'
import BannerCrumb from '../banner/bannerCrumbComponent'
import NewCommentComponent from '../../funcionalities/comments/components/newCommentComponent'
import ListCommentsComponent from '../../funcionalities/comments/components/listCommentsComponent'
import SlideProductComponent from '../slide/slideProductComponent'
import ProductContainer from '../../funcionalities/products/container/product.container'
import InfoProductComponent from './productsDetails/description&Especification&Info/infoProductComponent'
import DescriptionComponent from './productsDetails/description&Especification&Info/descriptionComponent'
import EspecificationComponent from './productsDetails/description&Especification&Info/especificationComponent'
import Footer from '../footer/footerComponent.js'


const ProductDetails = props => {
    const { pathname } = props.location
    const { product } = props
    return (
        <div>
            {/*Parte 1: Esse componente, está alocado em um container, 
               Ele faz a chamada para a função listingProductDetails(),
               Essa função tem a responsabilidade de fazer a chamada para 
               uma API*/}
            <ProductContainer pathname={pathname} /> {/*FINAL parte 1*/}

            <BannerCrumb />
            <Menu />
            {/*Parte 2: Area responsavel pelo slide, informações  gerais do 
                produto(preço, pequena descrição e adicionar ao carrinho)*/}
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner justify-content-md-center">
                        {
                            product.map((itensProduct, index) => (
                                <Fragment key={index}>
                                    <SlideProductComponent images={itensProduct.products} />
                                </Fragment>
                            ))
                        }
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <InfoProductComponent infoProduct={product} />
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
                        {//componente para renderizar a descrição
                            product.map((itensProduct, index) => (
                                <DescriptionComponent key={index}
                                    descriptionProduct={itensProduct.products.fullDescription} />
                            ))
                        }
                        {//Componente para renderizar a especificação
                            product.map((itensProduct, index) => (
                                <EspecificationComponent key={index}
                                    especification={itensProduct.products.especification} />
                            ))
                        }
                        <div className="tab-pane fade" id="review" role="tabpanel"
                            aria-labelledby="review-tab">
                            <div className="row">
                                <ListCommentsComponent />
                                { /*Componente para envio de novos comentarios*/}
                                <NewCommentComponent product={product} />
                            </div>
                        </div>

                    </div>
                </div>
            </section> {/*FINAL, parte 3*/}

            <Footer />
        </div>
    );
}

const mapStateToProps = store => ({ product: store.productDetails.product })
export default connect(mapStateToProps)(ProductDetails)