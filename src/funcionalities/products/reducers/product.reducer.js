import {PRODUCT, LIST_COMMENT} from '../constants/product.constants'

const state = {
    product: []
}

export const productDetails = (initState = state, action) => {
    console.log("action.type "+action.type)
    
    //console.log(action.comments)    
    switch (action.type) {
        case PRODUCT:
            //console.log(action.product)
            //console.log("action.Product ", action.product)
            const newStateProduct = Object.assign({}, initState, {
                product: action.product
            })
            return newStateProduct
        case LIST_COMMENT:
            return Object.assign({}, initState, {
              comments:action.comments   
            })
            return newStateProduct
        default:
            return state
    }
}