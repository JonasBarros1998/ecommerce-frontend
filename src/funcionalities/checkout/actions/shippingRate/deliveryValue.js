import {
    DELIVERY_VALUE
} from '../../constants/checkout.constants'

const totalvalue = (value) => ({ type: DELIVERY_VALUE, value })

export const sumDeliveryValue = (value) => {
    return (dispatch) => {
        dispatch(totalvalue(value))
    }
}