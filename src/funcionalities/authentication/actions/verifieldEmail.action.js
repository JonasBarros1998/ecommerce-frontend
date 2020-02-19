/**
 * Esse modulo server para verificar se o usuario
 * antes de iniciar o cadastro do ecommerce
 */
import {route} from '../routes/route'
import { verb } from '../../../utils/http/verbs.js'
import { createBrowserHistory } from 'history'
import { HttpHeaders } from '../../../utils/header/headers.js';
import {VERIFIELD_EMAIL} from '../constants/index.constants'
import {formattingObjects} from '../utils/objects/formattingObjects'

const history = createBrowserHistory({ forceRefresh: true })

const routeChange = url =>{
    return history.push(url)
}

const receiverEmail = statusEmail =>{
    return {
        type: VERIFIELD_EMAIL,
        statusEmail
    }
}

export const submitVerifieldEmail = email => {

    const header = HttpHeaders.defaultHeaders()
   const url =  route.user['verifield']
   const datas = formattingObjects(email)

    return dispatch => {
        return verb.post(url, header, datas)
            .then(response => {
                if(response.status === 409){
                    dispatch(receiverEmail(true))
                }else{
                    routeChange("/register")
                }
            }).catch(error => new Error(error))
    }
}