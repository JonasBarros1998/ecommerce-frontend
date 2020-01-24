import React from 'react'
import { connect } from 'react-redux'

import categoryC5 from '../../../_assets/img/category/c5.jpg'
import CategorieContainer from '../../../funcionalities/products/shop/categories/containers/categorie.container'

const Category = props => {
    const { categories } = props
    return (
        <>
            <CategorieContainer />
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        {categories.map((item, index) => {
                            return <div className="col-lg-8 col-md-12" key={index}>
                                <div className="row">

                                    {/* Photo One */}
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={item.CFTV.link} alt="" />
                                            <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">{item.CFTV.title}</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Photo One */}

                                    {/* Photo Two */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={item.Smarttwatch.link} alt="" />
                                            <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">{item.Smarttwatch.tile}</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Photo Two */}

                                    {/* Photo Three 
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100"  alt="" />
                                            <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title"></h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    */}
                                    {/* Photo Three */}

                                    {/* Photo Four */}
                                    <div className="col-lg-8 col-md-8">
                                        <div className="single-deal">
                                            <div className="overlay"></div>
                                            <img className="img-fluid w-100" src={item.AirPhones.link} alt="" />
                                            <a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
                                                <div className="deal-details">
                                                    <h6 className="deal-title">{item.AirPhones.title}</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Photo Four */}

                                </div>
                            </div>
                        }
                        )}

                        {/* Photo Five */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-deal">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100" src={categoryC5} alt="" />
                                <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                    <div className="deal-details">
                                        <h6 className="deal-title">Black friday</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Photo Five */}
                    </div>
                </div>
            </section>
        </>
    );
}

const mapStateToProps = store => ({ categories: store.categorie.typeCategories })
export default connect(mapStateToProps)(Category)