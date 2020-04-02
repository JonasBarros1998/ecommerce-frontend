/**
 * Action  para armazenar o valor do frete, escolhido pelo cliente
 */
import {
    DELIVERY_VALUE
} from '../../constants/checkout.constants'

const totalvalue = (value) => ({ type: DELIVERY_VALUE, value })


let shippinpValue = 0
export const sumDeliveryValue = (value) => {
    shippinpValue = value
    return (dispatch) => {
        dispatch(totalvalue(value))
    }
}

export const shipping = () => {
    console.log(shippinpValue)
}