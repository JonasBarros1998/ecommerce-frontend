import { route } from '../routes/user.routes'
import { verb } from '../../../utils/http/verbs'
import { createBrowserHistory } from 'history'
import { comparationFields } from '../utils/comparation'
import { HttpHeaders } from '../../../utils/header/headers'
import {
    DIFERENTS_FIELDS, VALIDATE_PASSWORD,
    INVALID_PASSWORD, COUNT_PASSWORD, INVALID_LEVEL_PASSWORD
} from '../constants/constants.user'
import { validPassword, countPassword } from '../utils/password/validPassword'
import { objectFormatting } from '../utils/formatingObject'

const history = createBrowserHistory({forceRefresh:true})

//mudar a rota, caso ocorrer tudo bem
const routeChange = (url) => {
    return history.push(url)
}
//Enviar informaçẽos lá para o reducer
const receiverRegister = valid => {
    return {
        type: VALIDATE_PASSWORD,
        valid
    }
}

const receiverPasswordInvalid = valid => {
    return {
        type: INVALID_LEVEL_PASSWORD,
        valid
    }
}

const receiverCountPassword = valid => {
    return {
        type: COUNT_PASSWORD,
        valid
    }
}

//Faz a validação entre as senhas 
const comparationFieldsPassword = (password, repeatPassword) => {
    const status = comparationFields([password, repeatPassword])
    
    return dispatch => {
        
        /* Caso as senhas forem diferentes, lança um erro
        *  e o o fluxo do programa será interrompido,
        *  la no catch da função registerNewUser */
       if (status.result === DIFERENTS_FIELDS) {
            dispatch(receiverRegister(DIFERENTS_FIELDS))
            throw new Error("password equals")
        }
    }
}
//verifica se a senha tem um nivel dificil 
const levelPassword = password => {
    const validation = validPassword(password)
    
    return dispatch => {
        if (validation.result === INVALID_PASSWORD) {
            dispatch(receiverPasswordInvalid(INVALID_LEVEL_PASSWORD))
            throw new Error(`Não use senhas faceis`)
        }
    }
}
//Conta os caracteres o usuario digitou
const countCaracterPassword = password => {

    const count = countPassword(password)
    return dispatch => {
        if (count.result === INVALID_PASSWORD) {
            dispatch(receiverCountPassword(INVALID_PASSWORD))
            throw new Error(`Digite uma senha com mais de 8 caracteres`)
        }
    }
}

export const registerNewUser = datasUser => {
    const url = route.user['create']
    const headers = HttpHeaders.defaultHeaders()

    return dispatch => {
        try {
            dispatch(countCaracterPassword(datasUser.password))
            dispatch(levelPassword(datasUser.password))
            dispatch(comparationFieldsPassword(datasUser.password, datasUser.repeatPassword))
        } catch (exception) {

            /* *Se a senha for diferente, vai cair aqui no catch, 
                *e o fluxo do programa será interrompido  */
            return { "response": "break" }
        }

        const datas = objectFormatting(datasUser)
        return verb.post(url, headers, datas)
            .then(response => {
                console.log(response)
                routeChange("/")
            })
            .catch(error => new Error(error))
    }
}