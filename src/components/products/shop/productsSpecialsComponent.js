import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
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
                                    <Slider {...settings}  key={index}>
                                            <div className="single-exclusive-slider">
                                                <img className="img-fluid" src={item.images} alt="" />
                                                <div className="product-details">
                                                    <div className="price">
                                                        <h6>{item.price}</h6>
                                                        <h6 className="l-through">{item.pricePromotion}</h6>
                                                    </div>
                                                    <h4>{item.title}</h4>
                                                    <div className="add-bag d-flex align-items-center justify-content-center">
                                                        <a className="add-btn" href={"block"}><span className="ti-bag"></span></a>
                                                        <span className="add-text text-uppercase">Add to Bag</span>
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