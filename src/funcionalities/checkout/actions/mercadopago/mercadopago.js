import { verb } from '../../../../utils/http/verbs'
import {
    HttpHeaders as header
} from '../../../../utils/header/headers'

import { checkoutRoute } from '../../routes/checkout.route'
import { redirectUser } from '../../helpers/redirect'
import { formattingObjectMercadoPago } from '../../services/formattingObjectMercadopago'

const purchaseItems = {
    items: [
        {
            "_id": "5e34b3503898ef8330a02c77",
            "link": "http://latest-products.integrardados.com.br/p6-2.jpg",
            "title": "Tênis Asics Gel Nimbus 21",
            "description": "tesde de pagamento com o mercado pago",
            "price": 1.00,
            "categorie": "smartwatch",
            "productId": "10",
            "quantity": 2
        },
        {
            "_id": "5e34b3503898ef8330a02c77",
            "link": "http://latest-products.integrardados.com.br/p6-2.jpg",
            "title": "Tênis Asics Gel Nimbus 21",
            "description": "tesde de pagamento com o mercado pago",
            "price": 1.50,
            "categorie": "smartwatch",
            "productId": "10",
            "quantity": 1
        }],
    payer: {
        "email": "jonas_barros@outlook.com",
    },
    address: {
        "street": "rua andorinhas brasileiras",
        "number": "61",
        "burgh": "Lago azul",
        "phone": "1159333427",
        "cep": "04851410",
        "city": "São Paulo",
        "state": "Sp"
    }
}


/*Dentro dessa função vai vir uma requisição com o mongo db, para pegar
os dados do cliente, para que seja possivel realizar o pagamento. 
semelhante ao purchaseOrder*/
const newObjectMercadopago = formattingObjectMercadoPago(purchaseItems)

export const mercadopago = () => {
    const payment = checkoutRoute.mercadoPago['payment']
    return dispatch => {
        verb.post(payment, header.defaultHeaders(), newObjectMercadopago)
            .then(response => {
                //Redirecinar o usuario para a pagina do mercado pago
                redirectUser(response.redirect)
            }).catch(err => (new Error(err)))
    }
}