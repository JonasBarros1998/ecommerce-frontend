import { LIST_COMMENT } from '../constants/comment.constants'
import { routes } from '../routes/comment.routes'
import { verb } from '../../../utils/http/verbs'
import { listObjectComment } from '../helpers/Objects/formattingObject'

const listComments = comments => ({ type: LIST_COMMENT, comments })

export const saveComment = (productId) => {
    const url = routes.comment.list(productId)
    return dispatch => {
        return verb.get(url)
            .then(response => {
            /*listObjectComment: Função para formatação de objetos, 
                com ela retiramos algumas responsabilidades do componente
                como criação de função, execsso de 'map' do componente, 
                porque listObjectComment() já deixa tudo pronto, para
                renderização*/
                dispatch(listComments(listObjectComment(response)))
            })
            .catch(err => (new Error(err)))
    }
}