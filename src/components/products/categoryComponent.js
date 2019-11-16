import React, { Component } from 'react'

import categoryCftv from '../../_assets/img/category/c1.jpg'
import categorySmartWatch from '../../_assets/img/category/c2.jpg'
import categoryAirPhone from '../../_assets/img/category/c3.jpg'
import categoryC4 from '../../_assets/img/category/c4.jpg'
import categoryC5 from '../../_assets/img/category/c5.jpg'

class Category extends Component {

    render() {
        return (
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">

                                {/* Photo One */}
                                <div className="col-lg-8 col-md-8">

                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={categoryCftv} alt="" />
                                        <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Photo One */}

                                {/* Photo Two */}
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={categorySmartWatch} alt="" />
                                        <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Photo Two */}

                                {/* Photo Three */}
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={categoryAirPhone} alt="" />
                                        <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Product for Couple</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Photo Three */}

                                {/* Photo Four */}
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src={categoryC4} alt="" />
                                        <a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Photo Four */}
                            </div>
                        </div>

                        {/* Photo Five */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-deal">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100" src={categoryC5} alt="" />
                                <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                    <div className="deal-details">
                                        <h6 className="deal-title">Sneaker for Sports</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Photo Five */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Category