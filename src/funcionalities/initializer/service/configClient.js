/**
 * Função para fazer o agrupamento do id do cliente (client_id)
 * e o objeto inicial que vai ser salvo no mongodb. 
 * 
 * Esse arquivo também salva os dados do clente no localstatorage
 */
import { generateNumber } from '../../../utils/numberAleators/numbersAleators'
import { mountObj } from '../helpers/mountObjectClient'
 
const numberAleators = generateNumber()
export const configClient = () => {
    const clientObj = mountObj(numberAleators)
    //salvar client_id no localStorage
    saveClientId()
    return clientObj
}

//função para salvar o id do cliente no localstorage
const saveClientId = () => localStorage.setItem('client_id', numberAleators)

//função para verifica se existe um id no localstorage
/*const verifieldClientId = () => {
    const clientId = localStorage.setItem('client_id')
    if(clientId == undefined){
        saveClientId()
    }
}
*/
