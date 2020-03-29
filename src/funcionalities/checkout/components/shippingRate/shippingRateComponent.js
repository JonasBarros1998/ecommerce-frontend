/**
 * Componente para renderização dos produtos comprados, para que o cliente escolha o tipo de frete .
 */
import React from 'react'
import { connect } from 'react-redux'
import ListingProductsContainer from '../../containers/listingProducts/listingProducts.container'
import ListingProductsComponent from './listingProductsComponent'
import ChooseShippingComponent from './chooseShippingComponent'

const ShippingRateComponent = props => {
    return (
        <div>
            {/**Comtainer para carregar a lista de produtos */}
            <ListingProductsContainer />
            <div className="cyan-default mb-1">
                <h5 className="color-white-default bc-cyan pt-2 pb-2 pl-3"
                    id="payment">Pagamento</h5>
            </div>
            <h5 className="pt-2" id="escolher_entrega">Qual tipo de entrega você deseja?</h5>
            <hr />
            <div className="card">
                <p className="mt-2 ml-2 fs" id="delivery">
                    <b>Vendido e entregue por J&M ecommerce</b></p>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-7 col-lg-8 col-xl-6">
                           {/* Renderizar a listagem de produtos */}
                           <ListingProductsComponent products = { props.products }/>
                        </div>

                        <div className="col-12 col-md-5 col-lg-12 mtr-2 col-xl-6">
                            <table>
                                {/**Componente para renderizar as opções de frete */}
                                <ChooseShippingComponent />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStoreToProps = store => ({ products: store.checkout.listingAllProduct })
export default connect(mapStoreToProps)(ShippingRateComponent)