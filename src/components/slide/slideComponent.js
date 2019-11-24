import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Slide extends Component {

    constructor() {
        super()
        this.state = {}
        this.linkDefault = "#"
        this.settings = {}
    }

    configSlide() {
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    }

    render() {

        return (
            <section className="banner-area">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-start">

                        <div className="col-lg-12">
                            <Slider {...this.settings}>
                                <div className="active-banner-slider owl-carousel">
                                    <div className="row single-slide align-items-center d-flex">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="banner-content">
                                                <h1>Nike New Collection!</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt ut labore et	dolore magna aliqua. Ut enim
                                                        ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <a className="add-btn" href={this.linkDefault}><span className="lnr lnr-cross"></span></a>
                                                    <span className="add-text text-uppercase">Adicionar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="active-banner-slider owl-carousel">
                                    <div className="row single-slide align-items-center d-flex">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="banner-content">
                                                <h1>Nike New Collection!</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt ut labore et	dolore magna aliqua. Ut enim
                                                        ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <a className="add-btn" href={this.linkDefault}><span className="lnr lnr-cross"></span></a>
                                                    <span className="add-text text-uppercase">Adicionar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}