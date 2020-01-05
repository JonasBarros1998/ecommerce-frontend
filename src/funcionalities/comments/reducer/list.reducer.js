import {LIST_COMMENT} from '../constants/comment.constants'

const state = { 
    comment: {}
}

export const list = (initState = state, action) => {
    switch (action.type) {
        case LIST_COMMENT:
            console.log(LIST_COMMENT, initState)
            break;
        default:
            return state
    }
}