import { verb } from '../http/verbs'
import { searchLocalStorage, saveLocalStorage } from '../localstorage'
import { HttpHeaders } from '../header/headers'
import { routes } from './routes'
import { formatting } from './formatingObject'

const url = routes.token.validator
/**
 * Essa função tem a responsabilidade pegar os tokens (token, refresh_token)
 * no nvegador do usuario, e verificar se eles são validos, 
 * passando o token dentro do header e envianado para a api analisar. 
 * 
 * Se me retorna qualquer coisa diferente de 200, quer dizer que o token
 * não é mais valido.  
 */
export const verifieldToken = (storage) => {
    const token = searchLocalStorage(storage.token)

    const header = HttpHeaders.headersBearer(token)
    console.log(header)
    verb.get(url, header)
        .then(response => {
            if (response.status !== 200) {
                //console.log(response)
                gearToken()
            }
        }).catch(error =>{ 
            //console.log("OK, caiu no error")
            new Error(error)
        })
}

/**
 * Função para renovar o token do usuario, usando o 
 * refresh_token, e salva-los no localStorage. 
 */
export const gearToken = () => {
    const refreshToken = searchLocalStorage('refresh_token')
    const header = HttpHeaders.defaultHeaders()
    const url = routes.token.gear
    const datas = formatting({ refresh_token: refreshToken })
    verb.post(url, header, datas)
        .then(response => {
            //console.log(response)
            saveLocalStorage('token', response.access_token)
            saveLocalStorage('refresh_token', response.refresh_token)
        }).catch(error => new Error(error))
}