import { verb } from "../../../utils/http/verbs"
import { SAVE_COMMENT } from '../constants/comment.constants'
import { routes } from '../routes/comment.routes'
import { HttpHeaders } from '../../../utils/header/headers'
import { searchLocalStorage } from '../../../utils/localstorage'
import { formatting } from '../helpers/Objects/formattingObject'
import { verifieldLocalStorage } from '../helpers/verifieldLocalStorage/verifieldToken'
import { verifieldToken } from '../../../utils/requisitionToken/token'

const newComment = comment => {
    return {
        type: SAVE_COMMENT,
        comment
    }
}

const userId = searchLocalStorage('user_id')
//Capturar o token do usuario no local storage
const token = searchLocalStorage('token')
//url necessaria para fazer a requisição
const url = routes.comment['new']
//O headers necessario para fazer a requisição
const headers = HttpHeaders.headersBearer(token)

export const saveComment = (message) => {
    /* Função 'verifieldLocalStorage()' Verifica se o token do usuario existe no localStorage, caso
     * caso não existir, ele vai para pagina de login para o usuario 
     * poder fazer o login na aplicação, e salvar o token, refresh_token 
     * e o user_id no localStorage. 
     * 
     * Porém se existir o token, user_id e o refresh_token no navegador 
     * ele passa para a proxima validação que é verificar se o token
     * dele ainda é valido.*/
    verifieldLocalStorage(['token', 'user_id', 'refresh_token'], '/login')
    /*Função para a validação de token, caso o token não seja valido,  
     *automaticamente a função vai se encarregar de atualiza-lo. */
    verifieldToken({token:'token', refresh_token: 'refresh_token'})
    
    const formatingObject = formatting(message, userId)
    return dispatch => {
        return verb.post(url, headers, formatingObject)
            .then(response => {
                dispatch(newComment(response))
                //fazer o refresh da pagina
                //window.location.reload()
            })
            .catch(error => new Error(error))
    }
}