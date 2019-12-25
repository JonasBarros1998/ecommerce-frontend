import { SLIDES_LINKS } from '../constants/slide.constants'

const state = {
    listLinks: []
}

export const mainSlides = (initState = state, action) => {
    if (action.type === SLIDES_LINKS) {
        return Object.assign({}, initState, {
            listLinks: action.links
        })
        
    } else {
        return state
    }
}