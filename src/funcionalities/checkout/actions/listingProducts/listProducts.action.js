/**Action para fazer a listagem de todos os produtos comprado pelo cliente, 
 * que estão armazendos no carrinho de compras
 */
//import {verb} from '../../../../utils/http/verbs' 
//import {HttpHeaders as header} from '../../../../utils/header/headers' 
import { indexedDatabase, listingObjectStore } from '../../../../utils/indexed-db/core/database'
import {
    LISTING_ALL_PRODUCTS
} from '../../constants/checkout.constants'

const products = (products) => ({ type: LISTING_ALL_PRODUCTS, products })

const database = {
    name: 'ecommerce-cart',
    version: 1,
    type: 'readwrite'
}

export const listingProducts = () => {

    return dispatch => {
        indexedDatabase(database)
            .then(connection => {
                listingObjectStore(connection, database)
                    .then(response => {
                        dispatch(products(response))
                    }).catch(error => new Error(error))
            }).catch(error => new Error(error))
    }
}
