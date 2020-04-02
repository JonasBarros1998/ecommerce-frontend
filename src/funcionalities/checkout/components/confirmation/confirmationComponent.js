import React from 'react'
import BannerCrumbComponent from '../../../../components/banner/bannerCrumbComponent'
import MenuComponent from '../../../../components/menu/MenuComponent'
import { connect } from 'react-redux'
import ConfirmationContainer from '../../containers/confirmation/confirmationContainer'

const ConfirmationComponent = props => {

    const { loadingcart, loadingAddress } = props

    return (
        <div>
            <BannerCrumbComponent />
            <MenuComponent />
            <ConfirmationContainer />
            <section className="order_details section_gap">
                <div className="container">
                    <h3 className="title_confirmation">Obrigado, seu pagamento foi confirmado e seu pedido foi recebido!</h3>
                    <div className="row order_d_inner d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="details_item mt-2">
                                <h4>Informações do pedido</h4>
                                <ul className="list">
                                    <li><a href="#"><span>Data</span> : 27/01/2020</a></li>
                                    <li><a href="#"><span>Total</span> : R$ 2.933,47</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details_item mt-2">
                                <h4>Endereço de entrega</h4>
                                {
                                    loadingAddress.map((item, index) => (
                                        <ul className="list" key={index}>
                                            <li><a href="#"><span>Rua</span> : {item.street}</a></li>
                                            <li><a href="#"><span>Cidade</span> : {item.city}</a></li>
                                            <li><a href="#"><span>Estado</span> : {item.states.nameState}</a></li>
                                            <li><a href="#"><span>Cep </span> : {item.cep}</a></li>
                                        </ul>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                    <div className="order_details_table">
                        <h2>Detalhes do pedido</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Quantidade</th>
                                        <th scope="col">Preço unitário</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadingcart.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <p>{item.name}</p>
                                                </td>
                                                <td>
                                                    <h5>x {item.quantity}</h5>
                                                </td>
                                                <td>
                                                    <p>{item.price.toLocaleString('pt-br', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}</p>
                                                </td>
                                            </tr>
                                        ))

                                    }
                                    <tr>
                                        <td>
                                            <h4>Valor da entrega</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>R$ 50,00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Valor total</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>R$ 2.210,00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = store => ({
    loadingcart: store.checkout.listingAllProduct,
    loadingAddress: store.checkout.loadingAddress
})
export default connect(mapStateToProps)(ConfirmationComponent)