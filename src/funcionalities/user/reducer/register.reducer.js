import {
    VALIDATE_PASSWORD, 
    INVALID_LEVEL_PASSWORD,
    COUNT_PASSWORD} from '../constants/constants.user'

const state = {
    mensage: "",
    messagePasswordInvalid: "",
    messageCountPassword: ""
}

export const register = (initState = state, action) =>{

    if(action.type === VALIDATE_PASSWORD){
        return Object.assign({}, initState, {
            mensage: "As senhas são diferentes"
        })
    }

    if(action.type === INVALID_LEVEL_PASSWORD){
        return Object.assign({}, initState, {
            password: action.valid,
            messagePasswordInvalid: `Não utilize senhas muito faceis de decifrar`
        })
    }

    if(action.type === COUNT_PASSWORD){
        return Object.assign({}, initState, {
            password: action.valid, 
            messageCountPassword: "Digite uma senha com mais de 8 caracteres"
        })
    }
    else{
        return state
    }
}