import { env } from '../../../env.js';
import { route } from '../routes/route.js';
import { createBrowserHistory } from 'history';
import { verb } from '../../../utils/http/verbs.js';
import { saveLocalStorage } from '../../../utils/localstorage'
import { HttpHeaders as header } from '../../../utils/header/headers.js';
import { searchStorage, saveStorage } from '../helpers/searchLocalStorage'
import { SUBMIT_LOGIN, 
         EXIST_LOCALSTORAGE, 
         NOT_EXISTS_LOCALSTORAGE } from '../constants/index.constants'

const history = createBrowserHistory({ forceRefresh: true })

const receiver = statusAuthenticate => {
    return {
        type: SUBMIT_LOGIN,
        statusAuthenticate
    }
}

//Caso o login ocorreu tudo bem, mudar para a pagina inicial
const routeChange = url => {
    return history.push(url)
}

const requisitionUser = (username) => {

    const headers = header.defaultHeaders()
    const urlId = route.user_id['id']

    return verb.post(urlId, headers, { "username": username })
        .then(response => (response))
        .catch(err => (new Error(err)))
}

/* Função para fazer a pesquisa do ID,
do usuario no qual fez o login */
const searchId = username => {
    const search = searchStorage({ key: 'user_id' })

    switch (search.response) {
        case EXIST_LOCALSTORAGE:
            //Se o id do usuario, já existe, não chame,
            //uma nova requisição, para pesquisar pelo ID
            break;

        case NOT_EXISTS_LOCALSTORAGE:
            requisitionUser(username)
                .then(respRequisition => {
                    const [user] = respRequisition.response
                    saveStorage({ key: 'user_id', value: user.id })
                    //Mudar de rota caso tudo ocorra bem
                    routeChange("/")
                })
            break;

        default:
            break;
    }
}

export const authentication = value => {

    const url = route.oauth['token']
    const headerToken = header.headersForGearToken()

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
                if (response.error === "invalid_grant") {
                    dispach(receiver(true))
                } else {
                    searchId(request['username'])
                    //salvar no localStorage
                    saveLocalStorage("token", response["access_token"])
                    routeChange('/')
                }
            })
            .catch(error => new Error(error))
    }
}