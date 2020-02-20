import { verb } from '../../../../utils/http/verbs.js';
import { route } from '../../routes/route.js';
import { HttpHeaders as header } from '../../../../utils/header/headers.js';
import { searchLocalStorage as storage } from '../../../../utils/localstorage'
import { formattingObjectForgotPwd } from '../../utils/objects/formattingObjects'
import { validatePassword } from '../../../../utils/validPassword'
import { createBrowserHistory } from 'history'

import {
    EASY_PASSWORD,
    COUNT_INVALID,
    EQUAL_PASSWORD,
} from '../../constants/index.constants'

const easyPassword = () => ({ type: EASY_PASSWORD })
const countPassword = () => ({ type: COUNT_INVALID })
const equalPassword = () => ({ type: EQUAL_PASSWORD })

const history = createBrowserHistory({forceRefresh: true})

const paramUrl = () => {
    const url = window.location.href
    const urlArray = url.split('/')
    const hash = urlArray[urlArray.length - 1]
    return hash
}

//Capturar o nome do usuario no localstorage
const search = storage('username_forgot_pwd')

export const alterPassword = (password) => {

    return dispatch => {

        //Chama a função para validar a senha do usuario
        const validate = validatePassword(password.newPassword,
            [password.newPassword, password.repeat])

        switch (validate) {
            case COUNT_INVALID:
                dispatch(countPassword())
                break;

            case EASY_PASSWORD:
                dispatch(easyPassword())
                break;

            case EQUAL_PASSWORD:
                dispatch(equalPassword())
                break;

            default:
                //Adiciona o username ao objeto alteringPassword
                formattingObjectForgotPwd(password, 'username', search)

                const datas = {
                    username: password.username,
                    password: password.newPassword,
                }
                return verb.put(route.password(paramUrl()),
                    header.defaultHeaders(),
                    datas)
                    .then((response) => {
                        history.push('/login')
                    }).catch(err => new Error(err))
        }
    }
}


