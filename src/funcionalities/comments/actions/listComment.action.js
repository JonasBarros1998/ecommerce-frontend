import { LIST_COMMENT } from '../constants/comment.constants'
import { routes } from '../routes/comment.routes'
import { verb } from '../../../utils/http/verbs'

const listComments = comments => {
    return {
        type: LIST_COMMENT,
        comments
    }
}

export const saveComment = (productId) => {
    const url = routes.comment.list(productId)
    return dispatch => {
        return verb.get(`http://127.0.0.1:8000/jm-ecommerce/comments/${74}`)
            .then(response => {
                dispatch(listComments(response))
            })
            .catch(err => (new Error(err)))
    }
}