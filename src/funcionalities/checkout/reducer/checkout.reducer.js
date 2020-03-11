import {
    DELIVERY_ADDRESS,
    NOT_EXIST_ADDRESS,
    EXIST_ADDRESS,
    CHANGE_ADDRESS
} from '../constants/checkout.constants'

const state = {
    notExisitAddress: null,
    existAddress: null,
    addressDelivery: [],
    loadingAddress: []
}

export const checkout = (initState = state, action) => {
    switch (action.type) {
        case DELIVERY_ADDRESS:
            return Object.assign({}, initState, {
                existAddress: true,
                addressDelivery: [action.addressDelivery],
                loadingAddress: [action.addressDelivery]
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

        case CHANGE_ADDRESS:
            console.log(action.address)
            return Object.assign({}, initState, {
                loadingAddress: action.address
            })
        default:
            return state
    }
}
