/**
 * Este arquivo serve para fazer a formatação do objeto, para envia-lo para o 
 * mongo-db
 */

let objMercadopago = {
    items: [

    ],
    payer: {
        email: ""
    },
    auto_return: "all",
    external_reference: '1',
    back_urls: {
        success: "localhost:3000",
        pending: "localhost:3000",
        failure: "localhost:3000",
    }
}

/**
 * @param mercadopago objeto completo, vindo do banco de dados
 */
export const formattingObjectMercadoPago = (mercadopago) => {
    mercadopago.items.map((item) => {
       return objMercadopago.items.push({
            "id": item['_id'],
            "title": item['title'],
            "description": item['description'],
            "quantity": item['quantity'],
            "currency_id": 'BRL',
            "unit_price": item['price']
        })
    })
    objMercadopago.payer.email = mercadopago.payer['email']
    
    return objMercadopago
} 