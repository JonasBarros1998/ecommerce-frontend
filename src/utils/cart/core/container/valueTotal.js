import React, { useEffect, useState } from 'react'
import { total } from '../services/total'
import { connect } from 'react-redux'

const ValueTotal = props => {

    const [valueTotal, setValueTotal] = useState([])

    useEffect(() => {
        if (props.value.length !== 0) {
            const sumTotal = total(props.value)
            setValueTotal(sumTotal)
        }
    }, [])

    return (
        <p className="text bold">{
            props.cart == 0 ?
            valueTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
            :
            props.cart.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
        }</p>
    )
}

const mapStateToProps = store => {
    return {
        cart: store.cart.value
    }
}

export default connect(mapStateToProps)(ValueTotal)