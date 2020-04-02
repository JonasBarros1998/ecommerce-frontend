/** Essa action tem as seguintes funções: 
 * Listar o endereco do cliente localizado no localStorage.
 * Carregar o carrinho do cliente localizado no indexedDb 
 */
import { indexedDatabase, listingObjectStore } from "../../../../utils/indexed-db/core/database"
import {
    CONFIRMATION
} from '../../constants/checkout.constants'

const infoClient = (datas) => { type: CONFIRMATION, datas }

const database = {
    name: "ecommerce-cart",
    version: 1,
    type: "read"
}

//Fazer a busca do carrinho do cliente
const listingCart = () => {
    return new Promise((resolve, reject) => {
        indexedDatabase(database)
            .then(connection => {
                listingObjectStore(connection, database)
                    .then(response => resolve(response))
            }).catch(error => reject(error))
    })
}

export const confirmationClient = () => {
    return (dispatch) => {
        listingCart()
            .then(response => dispatch(infoClient(response))
            ).catch(error => new Error(error))
    }
}