import React, { Component } from 'react'

export default class BannerCrumbComponent extends Component {

    render() {
        return (
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Detalhes do produto</h1>
                            <nav className="d-flex align-items-center">
                                <a href={"localhost://3000"}>Pagina inicial<span className="lnr lnr-arrow-right"></span></a>
                                <a href={"localhost://3000"}>Shop<span className="lnr lnr-arrow-right"></span></a>
                                <a href="single-product.html">Detalhes</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}