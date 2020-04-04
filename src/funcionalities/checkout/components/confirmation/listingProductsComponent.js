/**
 * Componnete para renderização dos produtos comprados pelo cliente
 */
import React, { useState, useEffect } from 'react'

const ListingProductsComponent = props => {
    const [products, setProducts] = useState([])
    const datas = props.datas
    useEffect(() => {
        if (datas !== undefined) {
            const { items } = datas
            items.pop()
            setProducts(items)
        }

    }, [products, datas])
    return (
        <>
            {
                products.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>x{item.quantity}</td>
                        <td>{item.unit_price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</td>
                    </tr>
                ))
            }
        </>
    )
}

export default ListingProductsComponent