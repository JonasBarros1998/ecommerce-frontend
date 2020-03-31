/**
 * Este arquivo serve para fazer a formatação do objeto, para envia-lo para o 
 * mercado pago
 */

let objMercadopago = {
    items: [

    ],
    payer: {
        name: "",
        email: "",
        phone: {
            number: 0
        },
        identification: {
            type: "CPF",
            number: ""
        },
        address: {
            street_name: "",
            street_number: 0,
            zip_code: ""
        }
    },
    auto_return: "all",
    external_reference: '1',
    back_urls: {
        success: "http://localhost:3000/",
        pending: "http://localhost:3000/",
        failure: "http://localhost:3000/",
    },
    expires: true,
    expiration_date_from: "2020-01-04T12:00:00.000-04:00",
    expiration_date_to: "2020-07-12T12:00:00.000-04:00"
}

/**
 * @param mercadopago objeto completo, como os itens do carrinho, e o endereço de entrega.
 */
export const formattingObjectMercadoPago = (cart, address) => {

    cart.map((item) => {
        return objMercadopago.items.push({
            "id": item['_id'],
            "title": item['title'],
            "description": item['description'],
            "quantity": item['quantity'],
            "currency_id": 'BRL',
            "unit_price": item['price']
        })
    })

    objMercadopago.payer['name'] = address.toReceiver
    objMercadopago.payer['email'] = address.email
    objMercadopago.payer.phone['number'] = convertNumber(address.phone)
    objMercadopago.payer.identification['number'] = address.cpf
    objMercadopago.payer.address['street_name'] = address.street
    objMercadopago.payer.address['street_number'] = parseFloat(address.number)
    objMercadopago.payer.address['zip_code'] = address.cep
    return objMercadopago
} 

//Função para substituir alguns caracteres especiais do telefone, e converter para um tipo float
const convertNumber = (phone) => {
    //número de telefone: (11) 5933-3427
    //resultado = 11) 59333427
    const firstParentheses = phone.replace('(', "")
    //resulado = 11593-3427
    const secondParentheses = firstParentheses.replace(') ', "")
    //resultado = 1159333427
    const finaConversion = secondParentheses.replace('-', "")
    return parseFloat(finaConversion)
}