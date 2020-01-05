import {SAVE_COMMENT} from '../constants/comment.constants'
const state = {
    comments: "" ,
    mensageComments: ""
}

export const comments = (initState = state, action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            Object.assign({}, initState, {

            })
            break;
        default:
            break;
    }
}
