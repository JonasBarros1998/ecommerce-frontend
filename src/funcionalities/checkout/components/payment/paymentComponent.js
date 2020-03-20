/**Componente vinculado ao pagamento com mercadopago */
import React from 'react'

const PaymentComponent = () => {
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
                    <a className="genric-btn bc-cyan text-uppercase">
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

export default PaymentComponent