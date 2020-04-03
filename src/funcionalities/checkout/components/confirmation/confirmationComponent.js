import React, { useEffect, useState } from 'react'
import BannerCrumbComponent from '../../../../components/banner/bannerCrumbComponent'
import MenuComponent from '../../../../components/menu/MenuComponent'
import { connect } from 'react-redux'
import ConfirmationContainer from '../../containers/confirmation/confirmationContainer'
import DatePurchase from './datePurchase'
import ValuePurchase from './valuePurchase'
import ListingProducts from './listingProducts'
import AddressComponent from './addressComponent'

const ConfirmationComponent = props => {
    const { client } = props
    const [datas] = client

    const [shipping, setShipping] = useState(0)

    useEffect(() => {
        if (datas !== undefined) {

            //Frete
            setShipping(datas.frete)
        }


    })


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
                                        <DatePurchase date = {datas} />
                                    </li>

                                    <li>
                                        <a href="#">
                                            <span>Total</span>
                                            :<ValuePurchase value={datas} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details_item mt-2">
                                <h4>Endereço de entrega</h4>
                                {
                                    <AddressComponent address = { props.client }/>
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
                                        <ListingProducts datas={datas} />
                                    }
                                    <tr>
                                        <td>
                                            <h4>Valor da entrega</h4>
                                        </td>
                                        <td>
                                            <h5></h5>
                                        </td>
                                        <td>
                                            <p>{shipping.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: "BRL"
                                            })}</p>
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
                                            <p><ValuePurchase  value={datas} /></p>
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

const mapStateToProps = store => {
    return {
        client: store.checkout.client
    }
}
export default connect(mapStateToProps)(ConfirmationComponent)