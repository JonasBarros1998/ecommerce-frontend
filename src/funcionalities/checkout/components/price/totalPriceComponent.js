/**
 * Componente para renderizar o valor total que o cliente pagará
 */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const TotalPriceComponent = props => {

    let [total, setTotal] = useState(0)

    useEffect(() => {
        //Se listingAllProduct.length for igual a zero, quer dizer que não existe produto no carrinho
        if (props.listingAllProduct.length === 0) {
            return;
        } else {

            //Calcular o valor total, incluindo o valor do frete
            let valueTotal = 0
            for (const { quantity, price } of props.listingAllProduct) {
                valueTotal = (valueTotal + (price * quantity))
            }
            //calcula o valor do frete
            valueTotal += props.valueDelivery
            setTotal(valueTotal)
        }
    }, [props.listingAllProduct, props.valueDelivery])
    return (
        <>
            <div className="pt-3 pl-2 pr-2 pb-1 mt-2 colorb-gray97">
                {
                    <div className="row">
                        <h5 className="color-grimmys-grey col-6">Total a pagar</h5>
                        <p className="color-grimmys-grey col-6 text-right">
                            {
                                total.toLocaleString('pt-br', {
                                    style: "currency",
                                    currency: "BRL"
                                })
                            }</p>
                    </div>
                }
            </div>
        </>
    )
}

const mapStateToProps = store => (
    {
        listingAllProduct: store.checkout.listingAllProduct,
        valueDelivery: store.checkout.valueDelivery
    })

export default connect(mapStateToProps)(TotalPriceComponent)