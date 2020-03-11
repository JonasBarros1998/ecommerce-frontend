/**
 * Componente para rendereizar o endereço de entrega do cliente, e os 
 * itens que ele comprou
 */
import React from 'react'
import OrderItensComponent from './orderItensComponent'
import DeliveryAddressContainer from '../../containers/deliveryAddress/deliveryAddressContainer'
import ModalComponent from '../../../../components/modal/modalComponent'
import ChangeAddressContainer from '../../containers/deliveryAddress/changeAddressContainer'
import SearchAddressContainer from '../../containers/searchAddressContainer'
import { connect } from 'react-redux'

const DeliveryAddressComponent = props => {
    const { loadingAddress } = props

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

                            : props.addressDelivery.map((item, index) => (
                                <p className="color-grimmys-grey" key={index}>
                                    {item.street}<br />
                                    {item.burgh}, {item.number}<br />
                                    São Paulo- Sp<br />
                                    {item.cep}</p>
                            ))
                    }

                    {/*Se o endereço existir, vai retornar true, e renderizar 
                            * o botão  trocar de endereço*/
                        props.existAddress === true ?
                            <>
                                <hr />
                                <div>
                                    <small className="color-grimmys-grey">Quer receber seus produtos em outro endereço?</small>
                                </div>
                                {/** Container que renderiza o botão para trocar de endereço **/}
                                <ChangeAddressContainer />
                            </>
                            : <div></div>
                    }
                </div>
            </div>

            {/** Componente para renderizar os produtos 
             * comprados pelo cliente**/}
            <OrderItensComponent />

            {
                /**Se o loadingAddres foi um array vazio, não iremos renderizar a modal. 
                 * Porém se esse array estiver preenchido, quer dizer que o 
                 * endereço do cliente está salvo no localstorage,  e com isso o 
                 * modal será renderizado  */
                loadingAddress.length !== 0 ?
                    <ModalComponent
                        id={"modal_center"}
                        ariaLabelledby={"myLargeModalLabel"}
                        classModal={"modal-dialog modal-lg"}
                        title={<DeliveryAddressContainer
                            nameFields={loadingAddress} />}
                        body={"Adicionar o conteudo do modal"}
                        footer={false} />
                    : <div></div>
            }
        </>
    )
}

const mapStateToProps = store => {
    return {
        loadingAddress: store.checkout.loadingAddress,
        existAddress: store.checkout.existAddress,
        addressDelivery: store.checkout.addressDelivery
    }
}

export default connect(mapStateToProps)(DeliveryAddressComponent) 