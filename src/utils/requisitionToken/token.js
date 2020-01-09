import {verb} from '../http/verbs'
import {searchLocalStorage, saveLocalStorage} from '../localstorage'
import {HttpHeaders} from '../header/headers'
import {routes} from './routes'
import {formatting} from './formatingObject'

const url = routes.token.validator

export const validToken = () => {
    const storage = {
        token: 'token',
        refreshToken: 'refresh_token'
    }
    const token = searchLocalStorage(storage.token)
    const refreshToken = searchLocalStorage(storage.refreshToken)

    verifieldToken({acesses_token:token, refresh_token: refreshToken})
}

const verifieldToken = (tokens) => {
    const header = HttpHeaders.headersBearer(tokens.acesses_token)
    verb.get(url, header)
    .then(response => {
        if(response.status !== 200){
           gearToken(tokens.refresh_token)
        }
    }).catch(error => new Error(error))
}

const gearToken = (refreshToken) => {

    const header = HttpHeaders.defaultHeaders()
    const url = routes.token.gear
    const datas = formatting({refresh_token: refreshToken})

    verb.post(url, header, datas)
    .then(response => {
        saveLocalStorage('token', response.access_token)
        saveLocalStorage('refresh_token', response.refresh_token)
    })
    .catch(error => new Error(error))
}