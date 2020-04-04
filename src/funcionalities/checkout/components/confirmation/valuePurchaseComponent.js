/**
 * Componente para renderização do do valor total a ser pago pelo cliente
 */
import React, { useState, useEffect } from 'react'

const ValuePurchaseComponent = (props) => {
    const datas = props.value
    let [purchase, setPurchase] = useState(0)

    useEffect(() => {
        if (datas !== undefined) {
            let valuePurchase = 0
            datas.items.map((value) => (
                valuePurchase += (value.unit_price * value.quantity)
            ))
            setPurchase(valuePurchase)
        }
    }, [datas])

    return (
        <>
            {purchase.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
            })}
        </>
    )
}

export default ValuePurchaseComponent