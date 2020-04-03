import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const ListingProducts = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (props.datas !== undefined) {
            const { items } = props.datas
            let teste = items
            teste.pop()
            setProducts(teste)
        }

    })
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

const mapStateToProps = store => ({ client: store.checkout.client })
export default connect(mapStateToProps)(ListingProducts)