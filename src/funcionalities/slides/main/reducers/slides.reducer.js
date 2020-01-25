import { SLIDES_LINKS, 
            LISTING_CATEGORIES,
            MAIN_PRODUCTS} 
            from '../constants/slide.constants'

const state = {
    listLinks: []
}

export const mainSlides = (initState = state, action) => {
    switch (action.type) {
        case  SLIDES_LINKS:
            return Object.assign({}, initState, {
                listLinks: action.links
            })
        case LISTING_CATEGORIES:
            return Object.assign({}, initState, {
                typeCategories: action.categories
            })
        case MAIN_PRODUCTS:
            return Object.assign({}, initState, {
                listProducts: action.products
            })
        default:
            return state
    }
}