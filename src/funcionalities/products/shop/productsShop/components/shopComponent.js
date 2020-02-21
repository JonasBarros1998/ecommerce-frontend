import React from 'react'
import BannerCrumbComponent from '../../../../../components/banner/bannerCrumbComponent'
import product from '../../../../../_assets/img/category/c2.jpg'

const ShopComponent = () => {
    return (
        <>
            <BannerCrumbComponent />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">
                            <div className="head colorb-default">Categorias</div>
                            <ul className="main-categories list">
                                <li className="main-nav-list">
                                    <a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable">
                                        Fruits and Vegetables
                                    <span className="number"> (53)</span>
                                    </a>
                                </li>

                                <li className="main-nav-list">
                                    <a data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages">
                                        Beverages
                                    <span className="number">(24)</span></a>
                                </li>

                                <li className="main-nav-list">
                                    <a data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean">
                                    Home and Cleaning
                                    <span className="number">(53)</span></a>
                                </li>

                                <li className="main-nav-list">
                                    <a href="#">Pest Control
                                    <span className="number">(24)</span></a></li>

                                <li className="main-nav-list">
                                    <a data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct">
                                    Office Products
                                    <span className="number">(77)</span></a>
                                </li>

                                <li className="main-nav-list">
                                    <a data-toggle="collapse" href="#beauttyProduct" aria-expanded="false" aria-controls="beauttyProduct">
                                    Beauty Products
                                    <span className="number">(65)</span></a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-filter mt-50">
                            <div className="colorb-default top-filter-head">Filtros</div>
                            <div className="common-filter">
                                <div className="head">Marcas</div>
                                <form action="#">
                                    <ul className="list">
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="apple"
                                                name="brand" />
                                            <label>Apple<span>(29)</span></label>
                                        </li>
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="asus"
                                                name="brand" />
                                            <label>Asus<span>(29)</span></label></li>
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="gionee"
                                                name="brand" />
                                            <label>Gionee<span>(19)</span></label>
                                        </li>
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="micromax"
                                                name="brand" />
                                            <label>Micromax<span>(19)</span></label>
                                        </li>
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="samsung"
                                                name="brand" />
                                            <label>Samsung<span>(19)</span></label>
                                        </li>
                                    </ul>
                                </form>
                            </div>

                            <div className="common-filter">
                                <div className="head">Price</div>
                                <form>
                                    <ul className="list">
                                        <li className="filter-list">
                                            <input className="pixel-radio" type="radio" id="apple"
                                                name="brand" />
                                            <label htmlFor="apple">Apple<span>(29)</span></label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="colorb-default d-flex flex-wrap align-items-center pt-1 pb-2 pl-2">

                            <div className="input-group pt-2 pb-1  col-3">
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Selecione...</option>
                                    <option value="1">Menor preço</option>
                                    <option value="2">Maior preço</option>
                                    <option value="3">Mais vendidos</option>
                                </select>
                            </div>

                        </div>
                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src={product} alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
										htmlFor Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <a href="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src={product} alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
										htmlFor Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <a href="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src={product} alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
										htmlFor Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <a href="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src={product} alt="" />
                                        <div className="product-details">
                                            <h6>addidas New Hammer sole
										htmlFor Sports person</h6>
                                            <div className="price">
                                                <h6>$150.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">

                                                <a href="" className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <a href="" className="social-info">
                                                    <span className="lnr lnr-heart"></span>
                                                    <p className="hover-text">Wishlist</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>
                        </section>
                    </div>


                </div>
            </div>
        </>
    );
}
export default ShopComponent
