/**
 * Caso mensage for igual a false, quer dizer que o usuario
 * fez o login corretamente, e não vai aparecer nenhuma mensagem.
 * 
 * Porém se o objeto "mensage" for igual a true, 
 * a mensagem vai aparecer ao usuario.
 *  */
import {SUBMIT_LOGIN} from '../constants/index.constants'

const initState = {
    statusAuthenticate: false,
}

export const authenticationUser = (state = initState, action) =>{
    
    if(action.type === SUBMIT_LOGIN){
        return {
            ...state, 
            statusAuthenticate: action.statusAuthenticate
        }
    }else{
        return state
    }
}
