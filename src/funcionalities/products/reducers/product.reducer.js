import {PRODUCT, LIST_COMMENT} from '../constants/product.constants'

const state = {
    product: []
}

export const productDetails = (initState = state, action) => { 
    switch (action.type) {
        case PRODUCT:
            const newStateProduct = Object.assign({}, initState, {
                product: action.product
            })
            return newStateProduct
        case LIST_COMMENT:
            return Object.assign({}, initState, {
              comments:action.comments   
            })
        default:
            return state
    }
}