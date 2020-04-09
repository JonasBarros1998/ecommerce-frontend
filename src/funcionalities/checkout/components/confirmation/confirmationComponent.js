import React from 'react'
import BannerCrumbComponent from '../../../../components/banner/bannerCrumbComponent'
import MenuComponent from '../../../../components/menu/MenuComponent'
import { connect } from 'react-redux'
import ConfirmationContainer from '../../containers/confirmation/confirmationContainer'
import DatePurchaseComponent from './datePurchaseComponent'
import ValuePurchaseComponent from './valuePurchaseComponent'
import ListingProductsComponent from './listingProductsComponent'
import AddressComponent from './addressComponent'
import ShippingComponent from './shippingComponent'
import Footer from '../../../../components/footer/footerComponent.js'

const ConfirmationComponent = props => {
    const { client } = props
    const [datas] = client

    return (
        <div>
            <ConfirmationContainer />

            <BannerCrumbComponent />
            <MenuComponent />
            <section className="order_details section_gap">
                <div className="container">
                    <h3 className="title_confirmation">Obrigado, seu pagamento foi confirmado e seu pedido foi recebido!</h3>
                    <div className="row order_d_inner d-flex justify-content-center">
                        <div className="col-lg-4">
                            <div className="details_item mt-2">
                                <h4>Informações do pedido</h4>
                                <ul className="list">
                                    <li>
                                        <DatePurchaseComponent date={datas} />
                                    </li>

                                    <li>
                                        <button className="link-button">
                                            <span>Total</span>
                                            :<ValuePurchaseComponent value={datas} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details_item mt-2">
                                <h4>Endereço de entrega</h4>
                                {
                                    <AddressComponent address={props.client} />
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
                                        <ListingProductsComponent datas={datas} />
                                    }
                                    <tr>
                                        <td>
                                            <h4>Valor da entrega</h4>
                                        </td>
                                        <td></td>
                                        <td>
                                            {
                                                <ShippingComponent shipping={datas} />
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Valor total</h4>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p><ValuePurchaseComponent value={datas} /></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = store => ({ client: store.checkout.client })
export default connect(mapStateToProps)(ConfirmationComponent)