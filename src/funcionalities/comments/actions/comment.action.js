import { verb } from "../../../utils/http/verbs"
import {SAVE_COMMENT} from '../constants/comment.constants'

const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        comment
    }
}

export const saveComment = (message) => {
    return dispatch => {
        return verb.post()
        .then(response => {
            dispatch(saveComment(response))
        })
        .catch(error => new Error(error))
    }
}