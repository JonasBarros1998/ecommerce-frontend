import React, { Component } from 'react'
import Slider from 'react-slick'


class ProductsSpecials extends Component {

    constructor() {
        super()
        this.settings = {}
    }

    configSlide() {
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    render() {
        return (
            <section className="exclusive-deal-area">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 no-padding exclusive-left">
                            <div className="row clock_sec clockdiv" id="clockdiv">
                                <div className="col-lg-12">
                                    <h1>Exclusive Hot Deal Ends Soon!</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                            <a href={"block"} className="primary-btn">Shop Now</a>
                        </div>
                        <div className="col-lg-6 no-padding exclusive-right">
                            <div className="active-exclusive-product-slider">

                                {/*Imagem 1 */}
                                <Slider {...this.settings}>
                                    <div className="single-exclusive-slider">
                                        <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                                        <div className="product-details">
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <h4>addidas New Hammer sole
									for Sports person</h4>
                                            <div className="add-bag d-flex align-items-center justify-content-center">
                                                <a className="add-btn" href={"block"}><span className="ti-bag"></span></a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>
                                {/*Imagem 1 */}

                                {/*Imagem 2 */}
                                    <div className="single-exclusive-slider">
                                        <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                                        <div className="product-details">
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <h4>azedo azedume</h4>
                                            <div className="add-bag d-flex align-items-center justify-content-center">
                                                <a className="add-btn" href={"block"}><span className="ti-bag"></span></a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                {/*Imagem 2 */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductsSpecials