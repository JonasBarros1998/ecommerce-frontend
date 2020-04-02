import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listingProducts } from '../../actions/listingProducts/listProducts.action'
import { address } from '../../actions/deliveryAddress/delivaryAddres.action'
import { sumDeliveryValue } from '../../actions/shippingRate/deliveryValue'

export const ConfimationContainer = props => {
    return (
        <>
            { //action para listagem dos produtos
                props.listingProducts()}

            {//action para buscar o endereço
                props.address()}
            
            {//action para o valor da entrega
                //props.sumDeliveryValue()
            }
        </>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({ listingProducts, address, sumDeliveryValue }, dispatch)
export default connect(null, mapDispatchToProps)(ConfimationContainer)
