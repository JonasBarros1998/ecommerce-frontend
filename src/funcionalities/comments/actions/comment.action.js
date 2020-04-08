import { verb } from "../../../utils/http/verbs"
import { SAVE_COMMENT } from '../constants/comment.constants'
import { routes } from '../routes/comment.routes'
import { HttpHeaders as headers } from '../../../utils/header/headers'
import { formatting } from '../helpers/Objects/formattingObject'

//const createComment = comment => ({type: SAVE_COMMENT, comment})

//O headers necessario para fazer a requisição
const header = headers.defaultHeaders()
//Função para salvar comentarios dos clientes
export const saveComment = (comment) => {
    const date = new Date()
    formatting(comment, date.toJSON())
    const url = routes.comment['new']
    return dispatch => {
        return verb.post(url, header, comment)
            .then(() => {
                //Fazendo o reload da pagina
               window.location.reload()
            })
            .catch(error => new Error(error))
    }
}