import { LIST_COMMENT } from '../constants/comment.constants'
import { routes } from '../routes/comment.routes'
import { verb } from '../../../utils/http/verbs'

const ListComments = comment => {
    return {
        type: LIST_COMMENT,
        comment
    }
}

export const listComment = (productId) => {
    const url = routes.comment.list(productId)
    return dispatch => {

        return verb.get(url)
            .then(response => {
                console.log(response)
            })
            .catch(err => (new Error(err)))
    }
}