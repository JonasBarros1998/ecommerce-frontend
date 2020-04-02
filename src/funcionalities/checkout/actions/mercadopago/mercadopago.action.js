import { verb } from '../../../../utils/http/verbs'
import {
    HttpHeaders as header
} from '../../../../utils/header/headers'

import { checkoutRoute } from '../../routes/checkout.route'
import { redirectUser } from '../../helpers/redirect'
import { formattingObjectMercadoPago } from '../../services/formattingObjectMercadopago'
import { indexedDatabase, listingObjectStore } from '../../../../utils/indexed-db/core/database.js'
import { formattingObjmongodb } from '../../helpers/formattingObjMongodb'

const database = {
    name: "ecommerce-cart",
    version: 1,
    type: 'readwrite'
}

//Recuperar o endereço e algums informaçoes do cliente
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

/**
 * Quando o cliente clicar o botão de mercado pago, essa função vai ser chamada, 
 * para enviar o objeto ao mercado pago, e logo em seguida redirecionar o usuario. 
 * 
 * @param valueDelivery Preço do frete
 */

//fazer a busca da url
const payment = checkoutRoute.mercadoPago['payment']

export const mercadopago = async (objMercadopago) => {

    //Desabilitar o botão de mercado pago
    document.querySelector('.btn-mercadopago').classList.add('disabled')
    document.querySelector('.alert-success').classList.remove('fade')
    document.querySelector('.alert-text').innerHTML = "Aguarde em instantes você será redirecionado para mercado pago"
    const urlPayment = checkoutRoute.mercadoPago['payment']

    verb.post(payment, header.defaultHeaders(), objMercadopago)
        .then(response => {
            //Redirecionar o usuario para a pagina do mercado pago
            redirectUser(response.redirect)
        }).catch(err => (new Error(err)))
}

const client_id = window.localStorage.getItem('client_id')
const purchaseRoute = checkoutRoute.client['purchase']
const headers = header.defaultHeaders()
const [searchAddress] = address()
export const savePurchase = (valueDelivery) => {
    return (dispatch) => {
        searchCart()
            .then(response => {
                let newObjectMercadopago = formattingObjectMercadoPago(response, searchAddress, valueDelivery)
                newObjectMercadopago['frete'] = valueDelivery
                const newObjMongodb = formattingObjmongodb(newObjectMercadopago, client_id)
                console.log(newObjMongodb)
                verb.post(purchaseRoute, headers, newObjMongodb)
                    .then((response) => {
                        console.log(response)
                        mercadopago(newObjectMercadopago)
                    }).catch(error => new Error(error))
            })
    }
}