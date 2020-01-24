import { SLIDES_LINKS, LISTING_CATEGORIES} from '../constants/slide.constants'

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
        default:
            return state
    }
}

/**
 * if (action.type === SLIDES_LINKS) {
        return Object.assign({}, initState, {
            listLinks: action.links
        })
        
        
    } 
    else {
        return state
    }
    
 */