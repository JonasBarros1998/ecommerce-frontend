/**
 * Componente para o cliente escolher o tipo do frete
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sumDeliveryValue } from '../../actions/shippingRate/deliveryValue.js'

const ChooseShippingContainer = props => {
    let correio = 12.56
    return (
        <>
            <tr>
                <td className="pr-4" >
                    <div className="custom-control custom-radio ">
                        <input type="radio" id="customRadio2"
                            name="customRadio"
                            className="custom-control-input"
                            onClick={() => { props.sumDeliveryValue(correio) }} />
                        <label className="custom-control-label" htmlFor="customRadio2">
                            <small className="color-grimmys-grey">Correios</small>
                        </label>
                    </div>
                </td>

                <td className="pr-4 color-grimmys-grey">
                    <small>{correio.toLocaleString("pt-br", {
                        style: 'currency',
                        currency: 'BRL'
                    })}</small>
                </td>
            </tr>

        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ sumDeliveryValue }, dispatch)
export default connect(null, mapDispatchToProps)(ChooseShippingContainer)