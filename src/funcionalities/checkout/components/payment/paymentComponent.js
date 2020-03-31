/**Componente serve para renderizar o botão do mercadoPago, 
 * ao clicar nesse botão vai chamar a função mercadopago(), com isso 
 * o cliente será redirecionado para fazer o pagamento dentro do sistema do mercado pago.  
 */

import React from 'react'
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
                    {
                        /**Função do mercado pago, para redirecionar o usuario ao sistema do mercado pago*
                         *  @param props.valueDelivery Preço do frete que o cliente escolheu
                         * */
                    }
                    <a className="genric-btn bc-cyan text-uppercase"
                        onClick={() => mercadopago(props.valueDelivery)}>
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

const mapStateToProps = store => ({valueDelivery: store.checkout.valueDelivery})
export default connect(mapStateToProps)(PaymentComponent)