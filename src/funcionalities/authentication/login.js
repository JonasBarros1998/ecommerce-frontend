import env from '../../_environment/env.js'
import verb from "../../utils/http/verbs.js"
import HttpHeaders from '../../utils/header/headers.js'
import route from './routes/route'
import {saveLocalStorage } from '../../utils/localstorage/storage'

const data = {}

const verifieldEmail = data => {

    //const header = httpHeaders.headersDefault()
    //const verifield = route['user']['verifield']
}

const authentication = state => {

    const headersGearToken = HttpHeaders.headersForGearToken()

    const client_id = env['OAUTH'].CLIENT_ID
    const client_secret = env['OAUTH'].CLIENT_SECRET

    const userLogin = {
        'client_id': client_id,
        'client_secret': client_secret,
        'username': data.name = state.name,
        'password': data.password = state.password,
        'grant_type': 'password'
    }

    //rota: jm-ecommerce/authentication/token/
    const token = route['oauth']['token']

    verb.post(token, headersGearToken, userLogin)
        .then(tokenResponse => saveLocalStorage(tokenResponse["access_token"], "token"))
        .catch(error => new Error(`HELP ${error}`))
}

export default (verifieldEmail, authentication)