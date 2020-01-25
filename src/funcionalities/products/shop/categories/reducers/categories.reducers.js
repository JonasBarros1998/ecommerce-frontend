import {LISTING_CATEGORIES, 
              SLIDES_LINKS, 
              MAIN_PRODUCTS} 
            from '../constants/categories.constants'  

const state = {
    typeCategories: []
}

export const categories = (initState = state, action) => {
    switch (action.type) {
        case LISTING_CATEGORIES:
            return Object.assign({}, initState, {
                typeCategories: action.categories.response
            })
            case SLIDES_LINKS:
                return Object.assign({}, initState, {
                    listLinks: action.links
                })
            case MAIN_PRODUCTS:
                return Object.assign({}, initState, {
                    listProducts: action.products
                })
            default:
                return state
    }
}
