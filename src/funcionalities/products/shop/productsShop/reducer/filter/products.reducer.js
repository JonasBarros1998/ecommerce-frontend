import {
    FILTER_CATEGORIES,
    FILTER_MAKE,
    SHOPPING
} from '../../constants/index.constants'

const state = {
    categories: [],
    make: [],
    shopping: []
}

export const products = (initState = state, action) => {

    switch (action.type) {
        case FILTER_CATEGORIES:
            return Object.assign({}, initState, {
                categories: [...action.listingCategories]
            })
        case FILTER_MAKE:
            return Object.assign({}, initState, {
                make: [...action.listingMake]
            })
        case SHOPPING: 
            return Object.assign({}, initState, {
                shopping: [...action.shopping]
            })
        default:
            return state
    }
}