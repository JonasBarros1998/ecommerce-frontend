import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { savePurchase, mercadopago } from '../../actions/mercadopago/mercadopago.action'

const MercadoPagoContainer = props => {
    return (
        <>
            <a className="btn bc-cyan text-uppercase btn-mercadopago"
                onClick={() => props.savePurchase(props.valueDelivery)}>
                <small className="color-white-default">Pague com</small>
                <span className="fs">
                    <span className="color-torea-bay"><b> mercado</b>
                    </span><b className="color-white-default"> pago</b>
                </span>
            </a>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ savePurchase }, dispatch)
export default connect(null, mapDispatchToProps)(MercadoPagoContainer)