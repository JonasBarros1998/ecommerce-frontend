/**
 * container especifico para renderizar o botão de atuallizar o endereço de entrega do cliente
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAddress } from '../../actions/deliveryAddress/delivaryAddres.action'

const ChangeAddressContainer = props => {

    return (
        <>
            {
                <button type="button"
                    className="genric-btn success text-uppercase"
                    data-toggle="modal"
                    data-target="#modal_center"
                    onClick={() => props.changeAddress()}>Alterar endereço</button>
            }
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeAddress }, dispatch)
export default connect(null, mapDispatchToProps)(ChangeAddressContainer)
