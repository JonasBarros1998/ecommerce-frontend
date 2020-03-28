/**Componente vinculado para o cliente realizar o pagamento com o mercado pago */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { mercadopago } from '../../actions/mercadopago/mercadopago'

const PaymentComponent = props => {

    return (
        <>
            <h5 className="mt-3">Pague com Mercado Pago</h5>
            <div className="row mb-3">
                <hr />
                <div className="col-xl-12">
                    <small className="color-grimmys-grey">Ao clicar no botão abaixo, você será redirecionado ao
                    mercado pago para finalizar o pagamento</small>
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <a className="genric-btn bc-cyan text-uppercase"
                        onClick={() => props.mercadopago()}>
                        <small className="color-white-default">Pague com</small>
                        <span className="fs">
                            <span className="color-torea-bay"><b> mercado</b>
                            </span><b className="color-white-default"> pago</b>
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ mercadopago }, dispatch)
export default connect(null, mapDispatchToProps)(PaymentComponent)