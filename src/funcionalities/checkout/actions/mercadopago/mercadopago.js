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
export const mercadopago = async (valueDelivery) => {

    //Desabilitar o botão de mercado pago
    document.querySelector('.btn-mercadopago').classList.add('disabled')
    document.querySelector('.alert-success').classList.remove('fade')
    document.querySelector('.alert-text').innerHTML = "Aguarde em instantes você será redirecionado para mercado pago"
    //Avisa ao cliente que ele será redirecionado ao mercado pago
    //window.alert("Aguarde em instantes você será redirecionado para mercado pago")
    searchCart()
        .then(response => {
            //capturar o endereço do cliente
            const [searchAddress] = address()
            //Formatar o objeto para enviar ao mercado pago
            let newObjectMercadopago = formattingObjectMercadoPago(response, searchAddress, valueDelivery)
            //Url de pagamento
            const payment = checkoutRoute.mercadoPago['payment']
            verb.post(payment, header.defaultHeaders(), newObjectMercadopago)
                .then(response => {
                    //Redirecionar o usuario para a pagina do mercado pago
                    redirectUser(response.redirect)
                }).catch(err => (new Error(err)))
        }).catch(err => new Error(err))
}