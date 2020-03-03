/**
 * Componente para especificar o endereço de entrega do cliente
 */
import React from 'react'

const DeliveryAddressComponent = props => {
    return (
        <>
            <div className="head cyan-default mb-1">
                <h5 className="color-white-default bc-cyan pt-2 pb-2 pl-2 mtr-2">Resumo do pedido</h5>
            </div>
            <div className="card billing_details">
                <div className="card-header">
                    Endereço de entrega
  </div>

                <div className="card-body bc">
                    <p className="color-grimmys-grey">
                        Rua andorinhas brasileiras<br />
                        Parque Residencial dos Lagos, 61<br />
                        São Paulo- Sp<br />
                        04851-410</p>
                    <hr />
                    <div>
                        <small className="color-grimmys-grey">Quer receber seus produtos em outro endereço?</small>
                    </div>
                    <button type="button" className="genric-btn success text-uppercase">alterar endereço</button>
                </div>
            </div>
        </>
    )

}

export default DeliveryAddressComponent