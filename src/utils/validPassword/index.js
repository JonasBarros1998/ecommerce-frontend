/**
 `validPassword` Função para verificar se a senha não contém
*    caracteres faceis de decifrar. 
 * 
 * `countPassword` serve para verificar se o usuario digitou a quantidade 
 *    de caracters que o sistema permite
 */
import { listInvalidPassword } from './listingPassword'
import {
    PASSWORD_VALID,
    COUNT_INVALID,
    EASY_PASSWORD, 
    EQUAL_PASSWORD
} from './constants'

/**
 * Função para fazer a checagem, se a senha é invalida
 * @param password senha do usuario. Tipo string
 */
export const validatePassword = (password, digitsPassword) => {
    //A senha é invalida se for muito facil
    if (easyPassword(password) === EASY_PASSWORD) {
        return EASY_PASSWORD
    //A senha é invalida se for menor que 8 caracteres
    } else if (countPassword(password) === COUNT_INVALID) {
        return COUNT_INVALID
    //Verificar se a senha e o repetir a senha são iguais
    } else if (equalPassaword(digitsPassword) === EQUAL_PASSWORD){
        return EQUAL_PASSWORD
    }
    else {
        return true
    }
}

const easyPassword = password => {

    //Carregar a lista de senha invalidas
    const listPassword = listInvalidPassword()

    //Faz a verificação se a senha contem na lista de senhas invalidas 
    const indicePasswords = listPassword.passwordsInvalid.indexOf(password)

    if (indicePasswords !== -1) {
        return EASY_PASSWORD
    } else {
        return PASSWORD_VALID
    }
}
/**
 * Função para verificar se a senha contém 8 caracteres
 * 
 * @param password Senha do usuário. Tipo string 
 */
const countPassword = (password) => {

    if (password.length < 8) {
        return COUNT_INVALID
    } else {
        return PASSWORD_VALID
    }
}

/**
 * Função para verificar se as senhas que o usuario digitou são iguais ou não 
 * @param digits Objeto com as seguintes propriedades: password e repeat
 */
export const equalPassaword = (password = []) => {
    if(password[0] !== password[1]){
        return EQUAL_PASSWORD
    }else{
        return PASSWORD_VALID
    }
} 