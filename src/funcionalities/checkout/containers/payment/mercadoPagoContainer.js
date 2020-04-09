/**
 * Container para fazer a chamada da função savePurchase da action mercadopago.action
 * Quando o cliente clicar no botão de mercado pago, sua compra será salva, e
 * será redirecionado ao sistema do mercado pago.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { savePurchase } from '../../actions/mercadopago/mercadopago.action'

const MercadoPagoContainer = props => {
    return (
        <>
            <button href="/#" className="btn bc-cyan text-uppercase btn-mercadopago"
                onClick={() => props.savePurchase(props.valueDelivery)}>
                <small className="color-white-default">Pague com</small>
                <span className="fs">
                    <span className="color-torea-bay"><b> mercado</b>
                    </span><b className="color-white-default"> pago</b>
                </span>
            </button>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ savePurchase }, dispatch)
const mapStateToProps = store => ({ valueDelivery: store.checkout.valueDelivery })
export default connect(mapStateToProps, mapDispatchToProps)(MercadoPagoContainer)