import { verb } from '../../../../utils/http/verbs'
import {
    HttpHeaders as header
} from '../../../../utils/header/headers'

import { checkoutRoute } from '../../routes/checkout.route'
import { redirectUser } from '../../helpers/redirect'
import { formattingObjectMercadoPago } from '../../services/formattingObjectMercadopago'
import { indexedDatabase, listingObjectStore } from '../../../../utils/indexed-db/core/database.js'

const database = {
    name: "ecommerce-cart",
    version: 1,
    type: 'readwrite'
}

const address = () => (JSON.parse(window.localStorage.getItem('address')))

//Fazer a listagem do carrinho no indexedDb
const searchCart = () => {
    return new Promise((resolve, reject) => {
        indexedDatabase(database)
            .then(connection => {
                listingObjectStore(connection, database)
                    .then(response => {
                        resolve(response)
                    }).catch(error => (reject(error)))
            }).catch(error => (reject(error)))
    })
}
export const mercadopago = () => {
    const payment = checkoutRoute.mercadoPago['payment']
    searchCart()
        .then(async response => {
            const [searchAddress] = address()
            let newObjectMercadopago = formattingObjectMercadoPago(response, searchAddress)
            await verb.post(payment, header.defaultHeaders(), newObjectMercadopago)
                .then(response => {
                    //Redirecionar o usuario para a pagina do mercado pago
                    redirectUser(response.redirect)
                }).catch(err => (new Error(err)))
        }).catch(error => new Error(error))
}

