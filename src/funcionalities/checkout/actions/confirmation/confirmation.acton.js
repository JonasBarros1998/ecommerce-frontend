/** Essa action tem as seguintes funções: 
 * Listar o endereco do cliente localizado no localStorage.
 * Carregar o carrinho do cliente localizado no indexedDb 
 */
import { verb } from '../../../../utils/http/verbs'
import { HttpHeaders as header } from '../../../../utils/header/headers'
import { checkoutRoute } from '../../routes/checkout.route'
import { pathname } from '../../helpers/pathname'
import {
    CONFIRMATION
} from '../../constants/checkout.constants'

const infoClient = (datas) => ({ type: CONFIRMATION, datas })

//Apartir da url acessada pelo usuario, fazer a busca pelo id do cliente
const client_id = pathname() 

const headers = header.defaultHeaders()

//Fazer a da compra do cliente no banco de dados
const clientPurchase = []
export const purchase = () => {
    return (dispatch) => {
        const searchRoute = checkoutRoute.client.aproved(client_id)
        verb.get(searchRoute, headers)
            .then(client => {
                clientPurchase.push(client.response)
                dispatch(infoClient(clientPurchase))
                console.log(clientPurchase)
            })
            .catch(error => new Error(error))
    }
}