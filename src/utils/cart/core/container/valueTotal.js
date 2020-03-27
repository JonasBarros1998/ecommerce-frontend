import React, { useEffect, useState } from 'react'
import { total } from '../services/total'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ValueTotal = props => {

    const [valueTotal, setValueTotal] = useState([])
    console.log(props.cart)
    useEffect(() => {
        if (props.value.length !== 0) {
            const sumTotal = total(props.value)
            setValueTotal(sumTotal)
        }
    }, [])
    return (
        <p className="text bold">{
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
const mapDispatchToProps = dispatch => bindActionCreators({total}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ValueTotal)