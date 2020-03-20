/**
 * Função responsável por retornar o valor total da compra 
 * incluindo o preço de frete.  
 * @param purchaseItens Deve receber um objeto, com o preço de cada produto. 
 * Dentro desse objeto, deve conter o atributo `price`
 * 
 * @param shipping Uma string ou float com o valor do frete que o cliente escolheu 
 */

const itens = '[{"_id":"5e34b3503898ef8330a02c77","link":"http://latest-products.integrardados.com.br/p6-2.jpg","name":"Tênis Asics Gel Nimbus 21","price":440.96,"categorie":"smartwatch","productId":"10"},{"_id":"5e34b3503898ef8330a02c78","link":"http://latest-products.integrardados.com.br/p6-3.jpg","name":"Tênis Asics Gel Nimbus 21","price":440,"categorie":"Cftv","productId":"7"},{"_id":"5e3c663a03ca1a75379338ea","link":"http://products.integrardados.com.br/camera1.jpeg","name":"Câmera Xiaomi Mijia Wifi 360 1080P","price":234.45,"categorie":"cftv","productId":"8"},{"_id":"5e3c663e03ca1a75379338ec","link":"http://products.integrardados.com.br/camera1.jpeg","name":"Câmera Xiaomi Mijia Wifi 360 1080P","price":234.45,"categorie":"cftv","productId":"8"}]'
const purchaseItens = JSON.parse(itens)
let sumPrice = 0
export const sumValue = () => {
    const shipping = 0
    for (let { price } of purchaseItens) {
        sumPrice += price
    }
    return (sumPrice + shipping)
}

