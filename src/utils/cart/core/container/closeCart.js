import React from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'
//import { cart } from '../action/cart.js'
import { Link } from 'react-router-dom'

const CloseCart = props => {

    return (
        <div>
            <Link to={'/pagamento'} 
            className="btn genric-btn success radius mr-3"> Fechar Carrinho</Link>
        </div>
    )
}

//const mapDispatchToProps = dispatch => bindActionCreators({ cart }, dispatch)
export default CloseCart