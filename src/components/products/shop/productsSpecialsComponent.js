import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { addProduct } from '../../../utils/cart/core/addProduct'
import ProductsSpecialsContainer from '../../../funcionalities/products/shop/productsSpecials/container/productsSpecials.container'
const ProductsSpecials = props => {

    const { productsSpecials } = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <ProductsSpecialsContainer />
            <section className="exclusive-deal-area">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 no-padding exclusive-left">
                            <div className="row clock_sec clockdiv" id="clockdiv">
                                <div className="col-lg-12">
                                    <h1>Oferta</h1>
                                    <p>Oferta especial de inauguração da loja jm ecommerce</p>
                                </div>
                            </div>
                            <a href={"block"} className="primary-btn">Shop Now</a>
                        </div>
                        <div className="col-lg-6 no-padding exclusive-right">
                            <div className="active-exclusive-product-slider">
                                {
                                    productsSpecials.map((item, index) => (
                                        <Slider {...settings} key={index}>
                                            <div className="single-exclusive-slider">
                                                <img className="img-fluid" src={item.link} alt="" />
                                                <div className="product-details">
                                                    <div className="price">
                                                        <h6>{item.price.toLocaleString('pt-BR', {
                                                            style: 'currency',
                                                            currency: 'BRL',
                                                        })}</h6>
                                                        <h6 className="l-through">{
                                                            item.pricePromotion.toLocaleString('pt-BR', {
                                                                style: 'currency',
                                                                currency: 'BRL',
                                                            })}</h6>
                                                    </div>
                                                    <Link to={`/item/${item.categorie}/${item.title.replace(/ /gi, "_")}/${item.productId}`}
                                                        style={{textDecoration:"none"}}>
                                                        <h4 className="color-black">{item.title}</h4>
                                                    </Link>

                                                    <div className="add-bag d-flex align-items-center justify-content-center">
                                                        <a className="add-btn" onClick={
                                                            () => addProduct(item)
                                                        }><span className="ti-bag"></span></a>
                                                        <span className="add-text text-uppercase">
                                                            Adicionar
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = store => ({ productsSpecials: store.productsSpecials.listProductsSpecials })
export default connect(mapStateToProps)(ProductsSpecials)