/**
 * Componente para especificar o endereço de entrega do cliente, e os 
 * itens que ele comprou
 */
import React from 'react'
import OrderItensComponent from './orderItensComponent'
import DeliveryAddressContainer from '../../containers/deliveryAddress/deliveryAddressContainer'
import ModalComponent from '../../../../components/modal/modalComponent'
import SearchAddressContainer from '../../containers/searchAddressContainer'
import { connect } from 'react-redux'

const DeliveryAddressComponent = props => {

    return (
        <>
            <SearchAddressContainer />
            <div className="head cyan-default mb-1">
                <h5 className="color-white-default bc-cyan pt-2 pb-2 pl-2 mtr-2">Resumo do pedido</h5>
            </div>
            <div className="card billing_details">
                <div className="card-header">Endereço de entrega</div>
                <div className="card-body bc">
                    {
                        props.existAddress === false ?
                            <div className="d-flex justify-content-center">
                                <button type="button"
                                    className="genric-btn success text-uppercase"
                                    data-toggle="modal"
                                    data-target="#modal_center">Adicionar endereço</button>
                            </div>

                            : props.addressDelivery.map(item => (
                                <p className="color-grimmys-grey">
                                    {item.nameStreet}<br />
                                    {item.burgh}, {item.number}<br />
                                    São Paulo- Sp<br />
                                    {item.cep}</p>
                            ))
                    }
                    { /*Se o endereço existir, vai retornar true, e renderizar o botão
                        *  trocar de endereço*/
                        props.existAddress === true ?
                            <>
                                <hr />
                                <div>
                                    <small className="color-grimmys-grey">Quer receber seus produtos em outro endereço?</small>
                                </div>
                                <button type = "button"
                                    className = "genric-btn success text-uppercase"
                                    data-toggle = "modal"
                                    data-target = "#modal_center">Alterar endereço</button>
                            </>
                            : <div></div>
                    }
                </div>
            </div>

            {/** Componente para renderizar os produtos 
             * comprados pelo cliente**/}
            <OrderItensComponent />

            {/**Modal de cadastro ou troca de endereço**/}
            <ModalComponent
                id={"modal_center"}
                ariaLabelledby={"myLargeModalLabel"}
                classModal={"modal-dialog modal-lg"}
                title={<DeliveryAddressContainer />}
                body={"Adicionar o conteudo do modal"}
                footer={false} />
            {/**Modal de cadastro ou troca de endereço**/}
        </>
    )
}
const mapStateToProps = store => {
    console.log(store.checkout)
    return {
        existAddress: store.checkout.existAddress,
        addressDelivery: store.checkout.addressDelivery
    }
}

export default connect(mapStateToProps)(DeliveryAddressComponent) 