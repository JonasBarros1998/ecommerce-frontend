/**Componente serve para renderizar o botão do mercadoPago, 
 * ao clicar nesse botão vai chamar a função mercadopago(), com isso 
 * o cliente será redirecionado para fazer o pagamento dentro do sistema do mercado pago.  
 */
import React from 'react'
import { connect } from 'react-redux'
import  MercadoPagoContainer  from '../../containers/payment/mercadoPagoContainer'

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

                    {/*botão de mercado pago*/}
                    <MercadoPagoContainer valueDelivery = {props.valueDelivery}/>

                </div>
                <div className="col-12 d-flex justify-content-center mt-3">
                    <div className="alert alert-success alert-text fade" role="alert"></div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = store => ({ valueDelivery: store.checkout.valueDelivery })
export default connect(mapStateToProps)(PaymentComponent)