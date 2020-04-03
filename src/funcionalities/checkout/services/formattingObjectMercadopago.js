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
        success: "",
        pending: "",
        failure: "",
    },
    expires: true,
    expiration_date_from: "",
    expiration_date_to: ""
}

/**
 * @param cart O carrinho do cliente
 * @param address o endereço e algumas informações adicionais do cliente
 * @param valueDelivery O valor do frete que ele escolheu
 */
export const formattingObjectMercadoPago = (cart, address, valueDelivery) => {
    //Adicionar o carrinho do cliente
    cart.map((item) => {
        return objMercadopago.items.push({
            "id": item['_id'],
            "title": item['name'],
            "quantity": item['quantity'],
            "currency_id": 'BRL',
            "unit_price": item['price']
        })
    })

    //adicionar dentro de item, o frete que o cliente escolheu
    objMercadopago.items.push({
        "id": "id_frete",
        "title": "Frete",
        "quantity": 1,
        "currency_id": "BRL",
        "unit_price": valueDelivery
    })

    //Formatar objeto para adicionar informações gerais do cliente
    objMercadopago.payer['name'] = address.toReceiver
    objMercadopago.payer['email'] = address.email
    //convertNumber() é uma função para fazer a conversão do telefone para o formato float
    objMercadopago.payer.phone['number'] = convertNumber(address.phone)
    objMercadopago.payer.identification['number'] = address.cpf
    objMercadopago.payer.address['street_name'] = address.street
    objMercadopago.payer.address['street_number'] = parseFloat(address.number)
    objMercadopago.payer.address['zip_code'] = address.cep
    objMercadopago['expiration_date_from'] = convertDate()
    objMercadopago['expiration_date_to'] = convertDate(15)
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

//Formatar a data da maneira que o mercado pago deseja
const convertDate = (expire = 0) => {
    const date = new Date()
    let month = (date.getMonth() + 1)
    let day = date.getDate() 
    let hours = date.getHours()
    let minutes = (date.getMinutes() + expire)
    
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()

    if (month <= 9) {
        month = `0${month}`
    }if (day <= 9) {
        day = `0${day}`
    }if (hours <= 9) {
        hours = `0${hours}`
    }if(minutes <= 9){
        minutes = `0${minutes}`
        console.log(minutes)
    }if(seconds <= 9){
        seconds = `0${seconds}`
    }if(milliseconds <= 9){
        milliseconds = `0${milliseconds}`
    }
    const dateExpire = `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}-03:00`
    return dateExpire
}