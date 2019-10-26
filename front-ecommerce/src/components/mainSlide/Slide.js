import React, { Component } from 'react'

class Slide extends Component {

    constructor() {
        super()
        this.state = {}
        this.linkDefault = "#"
    }

    render() {
        return (<section className="banner-area">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-start">
                        <div className="col-lg-12">
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
                                    <div className="col-lg-7">
                                        <div className="banner-img">
                                            <img className="img-fluid" src="../../img/banner/banner-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default Slide