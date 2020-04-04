import React, { useState, useEffect } from 'react'

const ShippingComponent = (props) => {

    const [shipping, setShipping] = useState(0)
    const datas = props.datas 

    useEffect(() => {
        if (datas !== undefined) {
            setShipping(datas.frete)
        }
    }, [shipping, datas])

    return (
        <>
            <p>{shipping.toLocaleString('pt-br', {
                style: 'currency',
                currency: "BRL"
            })}</p>
        </>
    )
}

export default ShippingComponent