import React, { Component } from 'react'

import iconFreeDelivery from '../../_assets/img/features/f-icon1.png'
import iconReturnPolicy from '../../_assets/img/features/f-icon2.png'
import iconSupport from '../../_assets/img/features/f-icon3.png'
import iconSecurePayment from '../../_assets/img/features/f-icon4.png'

class Beneficies extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <section className="features-area section_gap">
                <div className="container">
                    <div className="row features-inner">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={iconFreeDelivery} alt={"icon"} />
                                </div>
                                <h6>Frete grátis</h6>
                                <small>acima de R$ 200,00</small>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={iconReturnPolicy} alt={"icon"} />
                                </div>
                                <h6>Politica de devolução</h6>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={iconSupport} alt={"icon"} />
                                </div>
                                <h6>Suporte 24/7</h6>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src={iconSecurePayment} alt={"icon"} />
                                </div>
                                <h6>Pagamento seguro</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Beneficies