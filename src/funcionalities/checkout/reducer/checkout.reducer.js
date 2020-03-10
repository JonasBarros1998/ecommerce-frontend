import {
    DELIVERY_ADDRESS, 
    NOT_EXIST_ADDRESS,
    EXIST_ADDRESS
} from '../constants/checkout.constants'

const state = {
    notExisitAddress: null,
    existAddress: null,
    addressDelivery: []
}

export const checkout  = (initState = state, action) => {
    switch (action.type) {
        case DELIVERY_ADDRESS:
            return Object.assign({}, initState, {
                existAddress: true,
                addressDelivery: [ action.addressDelivery ]
            })
        case NOT_EXIST_ADDRESS: 
            return Object.assign({}, initState, {
                existAddress: false
            })
        case EXIST_ADDRESS: 
            return Object.assign({}, initState, {
                existAddress: true,
                addressDelivery: action.addressDelivery
            })
        default:
            return state
    }
}
