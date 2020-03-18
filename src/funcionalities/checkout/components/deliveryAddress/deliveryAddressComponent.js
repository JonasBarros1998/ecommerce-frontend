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
                        /**Se o array de  loadingAddress.length for igual a 0, 
                         * quer dizer que não existe nenhum enderço salvo no 
                         * localStorage. 
                         */
                        loadingAddress.length === 0 ?
                            <div className="d-flex justify-content-center">
                                <button type="button"
                                    className="genric-btn success text-uppercase"
                                    data-toggle="modal"
                                    data-target="#modal_address">Adicionar endereço</button>
                            </div>

                            /** Renderizamos o endereço se o array de loadingAddress
                             * não estiver vazio, ou seja, já ha um endereço salvo no localStorage*/
                            : props.loadingAddress.map((item, index) => (
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
                /** Modal para alteração de endereço
                 * Só renderizamos o ModalComponent se o endereço do cliente já estiver
                 * salvo no localStorage*/

                //Se loadingAddress.length for diferente de 0, renderizamos a modal
                loadingAddress.length !== 0 ?
                    <ModalComponent
                        id={"modal_center"}
                        ariaLabelledby={"myLargeModalLabel"}
                        classModal={"modal-dialog modal-lg"}
                        title={<DeliveryAddressContainer
                            id={"modal_center"}
                            nameFields={loadingAddress} />}
                        footer={false} />
                    //Se for igual a zero, renderizamos uma div vazia
                    : <div></div>
            }

            {
                /** Modal para criação de um novo endereço
                 * Só renderizamos esse modal se não existir algum endereço cadastrado pelo cliente
                 */

                <ModalComponent
                    id={"modal_address"}
                    ariaLabelledby={"myLargeModalLabel"}
                    classModal={"modal-dialog modal-lg"}
                    title={<DeliveryAddressContainer
                        id="modal_address"
                        nameFields={[{
                            email: "",
                            address: "",
                            toReceiver: "",
                            cep: "",
                            typeAddress: "",
                            street: "",
                            number: "",
                            complement: "",
                            burgh: "",
                            states: "",
                            city: "",
                            reference: "",
                            phone: ""
                        }]}
                    />}
                    body={"Cadastre seu endereço"}
                    footer={false} />
            }
        </>
    )
}

const mapStateToProps = store => {
    return {
        loadingAddress: store.checkout.loadingAddress,
        existAddress: store.checkout.existAddress,
    }
}

export default connect(mapStateToProps)(DeliveryAddressComponent) 