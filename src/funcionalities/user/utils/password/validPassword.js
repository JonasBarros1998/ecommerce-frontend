/**
 * Modulo existem duas função, Uma para verificar se a
 *  senha não contém caracteres muito faceis de decifrar. 
 * 
 * E a segunda função serve para verificar se o usuario digitou 
 * a quantidade correta de caracteres  
 */
import {passwordInvalid} from './index'
import {INVALID_PASSWORD, PASSWORD_VALID} from '../../constants/constants.user'

let statusPassword = false
export const validPassword = password =>{

    const passwords = passwordInvalid()

    passwords.passwordsInvalid.map(values => {
        if(values === password){
            statusPassword = true
        }
    })
    
    if(statusPassword){
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