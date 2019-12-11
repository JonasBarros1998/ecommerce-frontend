import { env } from '../../../env.js';
import { route } from '../routes/route.js';
import { verb } from '../../../utils/http/verbs.js';
import { createBrowserHistory } from 'history';
import { saveLocalStorage } from '../../../utils/localstorage'
import { SUBMIT_LOGIN } from '../constants/index.constants'
import { HttpHeaders as header } from '../../../utils/header/headers.js';

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
                    routeChange("/")     //mudar de rota, 
                    //salvar no localStorage
                    saveLocalStorage(response["access_token"], "token")
                }
                return response
            })
            .catch(error => {
                new Error(error)
            })
    }
}