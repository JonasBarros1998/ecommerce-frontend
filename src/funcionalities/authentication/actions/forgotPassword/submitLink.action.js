import { verb } from '../../../../utils/http/verbs.js';
import { route } from '../../routes/route.js';
import { HttpHeaders as header } from '../../../../utils/header/headers.js';
import { USER_NOT_EXIST, SUBMIT_EMAIL } from  '../../constants/index.constants'
import { saveLocalStorage } from '../../../../utils/localstorage'
import { equalPassaword } from  '../../../../utils/validPassword/'
const username = () => ({type: USER_NOT_EXIST})

const submitRecuperatePassword = () => {
    return {
        type: SUBMIT_EMAIL
    }
}

const url = route.submit.email
const headers = header.defaultHeaders()
/**
 * Função para enviar o link no email para  o usuario trocar de senha
 * @param email email do usario 
 */
export const submitEmail = (email) => {
    const datas = {"username": email}
    return dispatch => {

        return verb.post(url,
            headers,
            datas)
            .then(response => {
                //Caso o e-mail não existir no banco de dados
                if(response.status == 204){
                    dispatch(username())
                }else{
                    saveLocalStorage('username_forgot_pwd', email)
                    dispatch(submitRecuperatePassword())
                }
            })
            .catch(err => new Error(err))
    }
}

