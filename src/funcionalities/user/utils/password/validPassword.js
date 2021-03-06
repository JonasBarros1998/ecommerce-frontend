/**
 `validPassword` Função para verificar se a senha não contém
*    caracteres faceis de decifrar. 
 * 
 * `countPassword` serve para verificar se o usuario digitou a quantidade 
 *    de caracters que o sistema permite
 */
import { listInvalidPassword } from './index'
import {INVALID_PASSWORD, PASSWORD_VALID} from '../../constants/constants.user'

export const validPassword = password =>{

    const listPassword = listInvalidPassword()

    //Verifica se a senha contem na lista de senhas invalidas 
   const indicePasswords =  listPassword.passwordsInvalid.includes(password)

    if(indicePasswords){
        return {result: INVALID_PASSWORD}
    }else{
        return {result: PASSWORD_VALID}
    }
}

//verifica se a senha contem no minimo 8 caracteres
export const countPassword = (password) =>{
    console.log(password)
     if(password.length < 8){
         return {result: INVALID_PASSWORD}
     }else{
         return {result: PASSWORD_VALID}
     }
}