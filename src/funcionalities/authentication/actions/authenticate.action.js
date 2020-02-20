import { env } from '../../../env.js';
import { route } from '../routes/route.js';
import { createBrowserHistory } from 'history';
import { verb } from '../../../utils/http/verbs.js';
import { saveLocalStorage, searchLocalStorage, deleteLocalStorage } from '../../../utils/localstorage'
import { HttpHeaders as header } from '../../../utils/header/headers.js';
import { searchStorage, saveStorage } from '../helpers/searchLocalStorage'
import { SUBMIT_LOGIN,
         EXIST_LOCALSTORAGE } from '../constants/index.constants'

const history = createBrowserHistory({ forceRefresh: true })

const receiver = statusAuthenticate => {
    return {
        type: SUBMIT_LOGIN,
        statusAuthenticate
    }
}
//redireicioamento de pagina
const routeChange = url => {
    return history.push(url)
}
/**
 * Realizar a requisição para caputurar o id do usuario, 
 * e logo em seguido salva-lo no localstorage do navegador
 */
const requisitionUser = (username) => {
    const token = searchLocalStorage('token')
    const headers = header.headersBearer(token)
    const urlId = route.user_id['id']
    return verb.post(urlId, headers, { "username": username })
        .then(result => {
            const [user] = result.response
            saveStorage({ key: 'user_id', value: user.id })
            routeChange("/")
        }).catch(err => (new Error(err)))
}
/**
 * Função para fazer a consulta do Id (user_id), 
 * e salvar no localStorage
 */
const searchId = username => {
    const search = searchStorage({ key: 'user_id' })
    if (search.response === EXIST_LOCALSTORAGE) {
        deleteLocalStorage('user_id')
        requisitionUser(username)
    } else {
        requisitionUser(username)
    }
}

 //Capturar as rota que vai ser usada na requisicao
const url = route.oauth['token']
//Definir qual o tipo de headers será usado
const headerToken = header.headersForGearToken()
/**
 * Função para realização de login, obtendo o token e o 
 * refresh_token, salvando os mesmo dentro no 
 * localStorage. E por ultimo fazendo a consulta do Id do usuario  
 */
export const authentication = value => {
    const request = {
        "username": value.email,
        "password": value.password,
        "client_id": env.OAUTH["CLIENT_ID"],
        "client_secret": env.OAUTH["CLIENT_SECRET"],
        "grant_type": "password"
    }
    return dispach => {
        return verb.post(url, headerToken, request)
            .then(response => {
                /**
                 * Vai entrar no if se o login for invalido, como um erro de e-mail ou senha
                 */
                if (response.error === "invalid_grant") {
                    dispach(receiver(true))
                } else {
                    //salvar token e refresh_token no localStorage
                    saveLocalStorage("token", response["access_token"])
                    saveLocalStorage("refresh_token", response['refresh_token'])
                    /**
                     * Antes de redirecionar o usuario, verifico se
                     * o Id do usuario existe no localStorage
                     */
                    searchId(request['username'])
                }
            }).catch(error => new Error(error))
    }
}