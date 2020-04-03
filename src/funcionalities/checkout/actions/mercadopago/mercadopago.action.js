import { verb } from '../../../../utils/http/verbs'
import { HttpHeaders as header } from '../../../../utils/header/headers'
import { checkoutRoute } from '../../routes/checkout.route'
import { redirectUser } from '../../helpers/redirect'
import { formattingObjectMercadoPago } from '../../services/formattingObjectMercadopago'
import { indexedDatabase, listingObjectStore } from '../../../../utils/indexed-db/core/database.js'
import { formattingObjmongodb } from '../../helpers/formattingObjMongodb'
import { message } from '../../helpers/message'
import {
    PAYMENT_APPROVED
} from '../../constants/checkout.constants'

//const info_client = (datas) => ({ type: PAYMENT_APPROVED, datas })

const database = {
    name: "ecommerce-cart",
    version: 1,
    type: 'readwrite'
}

//Recuperar o endereço e algums informaçoes do cliente
const address = () => (JSON.parse(window.localStorage.getItem('address')))

//Capturar o id do cliente
const client_id = window.localStorage.getItem('client_id')

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


//fazer a busca da url
const payment = checkoutRoute.mercadoPago['payment']
/**
 * A função vai envair o carrinho e informaçoes pessoais do cliente ao mercado pago
 * e logo em seguida redireciona-lo ao sistema do mercado pago
 * @param objMercadopago é o objeto a ser enviado ao mercadopago
 */
export const mercadopago = async (objMercadopago) => {
    message()

    verb.post(payment, header.defaultHeaders(), objMercadopago)
        .then(response => {
            //Redirecionar o usuario para a pagina do mercado pago
            //redirectUser(response.redirect)
        }).catch(err => new Error(err))
}

//fazer a busca da url
const purchaseRoute = checkoutRoute.client['purchase']
//headers
const headers = header.defaultHeaders()
//capturar o endereço
const [searchAddress] = address()
/**
 * Quando o cliente clicar o botão de mercado pago, primeiro iremos
 * salvar a compra no mongodb e logo em seguida, chamaremos a
 * função mercadopago, para redirecionamos ao sistema de pagamento
 * 
 * @param valueDelivery Preço do frete
 */
export const savePurchase = (valueDelivery) => {
    return (dispatch) => {
        searchCart()
            .then(response => {
                let newObjectMercadopago = formattingObjectMercadoPago(response, searchAddress, valueDelivery)
                newObjectMercadopago['frete'] = valueDelivery
                const newObjMongodb = formattingObjmongodb(newObjectMercadopago, client_id)
                verb.post(purchaseRoute, headers, newObjMongodb)
                    .then(response => {
                        mercadopago(newObjectMercadopago)
                    }
                    ).catch(error => new Error(error))
            })
    }
}