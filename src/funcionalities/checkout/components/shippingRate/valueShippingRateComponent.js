/**
 * Componente para renderizar o valor do frete
 */
import React from 'react'
import { connect } from 'react-redux'

const ValueShippingRateComponent = props => {
    return (
        <div className="pt-3 pl-2 pr-2 pb-1 mt-2 colorb-gray97">
            {
                <div className="row">
                    <h5 className="color-grimmys-grey col-6">Frete </h5>
                    <p className="color-grimmys-grey col-6 text-right">
                        {
                            props.valueDelivery.toLocaleString('pt-br', {
                                style: "currency",
                                currency: "BRL"
                            })
                        }</p>
                </div>
            }
        </div>
    )
}

const mapStateToProps = store => ({valueDelivery: store.checkout.valueDelivery })
export default connect(mapStateToProps)(ValueShippingRateComponent)