import { verb } from "../../../utils/http/verbs"
import {SAVE_COMMENT} from '../constants/comment.constants'
import {routes} from '../routes/comment.routes'
import {HttpHeaders} from '../../../utils/header/headers'
import {searchLocalStorage} from '../../../utils/localstorage'
import {formatting} from '../helpers/Objects/formattingObject'

const comments = comment => {
    return {
        type: SAVE_COMMENT,
        comment
    }
}

const userId = searchLocalStorage('user_id')
const token = searchLocalStorage('token')
const url = routes.comment['new']
const headers = HttpHeaders.headersBearer(token)

export const saveComment = (message) => {

    const formatingObject = formatting(message, userId)

    console.log(headers)
     return dispatch => {
        return verb.post(url, headers, formatingObject)
        .then(response => {
            console.log(response)
            //dispatch(comments(response))
        })
        .catch(error => new Error(error))
    }
}