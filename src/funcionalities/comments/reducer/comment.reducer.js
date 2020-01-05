import { SAVE_COMMENT } from '../constants/comment.constants'

const state = {
    comment: "",
    mensageComments: ""
}

export const comments = (initState = state, action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return Object.assign({}, initState, {
            })
        default:
            return state
    }
}
