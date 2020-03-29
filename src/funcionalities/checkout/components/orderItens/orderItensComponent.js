/**
 * Esse componente vai renderizar os seguintes items:
 * Itens que cliente comprou(nome, quantitade preço, foto e categoria).
 * Preço do frete.
 * Valor total a pagar.
 */
import React from 'react'
import TotalPriceComponent from '../price/totalPriceComponent'
import  ValueShippingRateComponent from '../shippingRate/valueShippingRateComponent'
import { connect } from 'react-redux'

const OrderItensComponent = props => {

    return (
        <>
            <div className="card billing_details mt-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5 pd-0">
                            <b>Itens de pedido</b>
                        </div>
                        <div className="col-3 pd-0">
                            <div><b>Qtde</b></div>
                        </div>
                        <div className="col-4 pd-0">
                            <div><b>Preço</b></div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    {
                        props.products.map((item, index) => (

                            <div className="row" key={index}>
                                <div className="col-5 p-0">
                                    <p className="text-grey-p">
                                        {item.name}
                                    </p>
                                </div>
                                <div className="col-3">
                                    <p className="text-grey-p">x{item.quantity}</p>
                                </div>

                                <div className="col-4 p-0">
                                    <p className="text-grey-p">{
                                        item.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        })
                                    }</p>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>

            {/**Componente para calcular o valor do frete */}
            <ValueShippingRateComponent />

            {/**Componente para calcular o valor total da compra do cliente */}
            <TotalPriceComponent />

        </>
    )
}

const mapStoreToProps = store => ({ products: store.checkout.listingAllProduct })
export default connect(mapStoreToProps)(OrderItensComponent)
