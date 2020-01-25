import { MAIN_PRODUCTS, 
            LISTING_CATEGORIES, 
            SLIDES_LINKS} from '../constants/maiProduct.contants'
 
const state = {
    listProducts: []
}

export const mainProducts = (initState = state, action) => {
    switch (action.type) {
        case MAIN_PRODUCTS:
            return Object.assign({}, initState, {
                listProducts: action.products.response
            })
        case SLIDES_LINKS:
            return Object.assign({}, initState, {
                listLinks: action.links
            })
        case LISTING_CATEGORIES:
            return Object.assign({}, initState, {
                typeCategories: action.categories
            })
        default:
            return state
    }
}