import React from 'react'
import mercadopago from '../../_assets/img/icons/mercadopago.png'

const Footer = () => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Sobre nós</h6>
                            <p className="color-gray">Somos a J&M e-commerce, nosso foco é vender
                            produtos de qualidade, e com preço justo.</p>
                        </div>
                    </div>

                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Cadastre-se</h6>
                            <p className="color-gray">Receba nossas promoções e novidades em primeira mão!</p>

                            <div id="mc_embed_signup">

                                <form target="_blank" method="get" className="form-inline">
                                    <div className="d-flex flex-row">
                                        <input className="form-control" name="EMAIL" placeholder="e-mail"
                                            required="" type="email" />
                                        <button className="click-btn btn btn-default">
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div className="info"></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">Pagamentos</h6>
                            <div className="instafeed d-flex flex-wrap">
                                <img src={mercadopago} alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Acompanhe</h6>
                            <p className="color-gray">Redes sociais</p>
                            <div className="footer-social d-flex align-items-center">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter ml-2"></i>
                                <i className="fa fa-dribbble ml-2"></i>
                                <i className="fa fa-behance ml-2"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0 color-gray"><small>Copyright J&M ecommerce | Todos os direitos reservados | CNPJ: 31.830.686/0001-71</small></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
