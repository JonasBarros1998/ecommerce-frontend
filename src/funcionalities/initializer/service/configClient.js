/**
 * Função para fazer o agrupamento do id do cliente (client_id)
 * e o objeto inicial que vai ser salvo no mongodb. 
 * 
 * Esse arquivo também salva os dados do cliente no localstatorage
 */
import { generateNumber } from '../../../utils/numberAleators/numbersAleators'
import { mountObj } from '../helpers/mountObjectClient'

const numberAleators = generateNumber()

//função para salvar o id do cliente no localstorage
const saveClientId = () => localStorage.setItem('client_id', numberAleators)

//função para verifica se existe um id no localstorage
export const configClient = () => {

    //Pesquisa o client_id do cliente no localstorage
    const clientId = localStorage.getItem('client_id')

    /**
     * Se clientId for undefined quer dizer que não existe nenhum id 
     * salvo no localstorage. 
     * 
     * Se NÃO for undefined então iremos atribuir um id para ele, 
     * e salvar o objeto inicial do cliente no mongodb
     */
    if (clientId === null) {
        saveClientId()
        //Adiciona o client_id ao objeto que vai ser salvo no mongodb
        const clientObj = mountObj(numberAleators)
        return clientObj
    }else{
        return null
    }
}

