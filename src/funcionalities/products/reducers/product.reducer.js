import {PRODUCT} from '../constants/product.constants'
const state = {
    product: []
}

export const productDetails = (initState = state, action) => {
    switch (action.type) {
        case PRODUCT:
            return Object.assign({}, initState, {
                product: action.product
            })
        default:
            return state
    }
}