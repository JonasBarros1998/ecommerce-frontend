/**
 * Modulo para adicionar os produtos no carrinho, e salvar no localstorage
 */
import { indexedDatabase } from './database/indexedDatabase.js'
import { repeatItems } from './services/repeatItems'
import {
    addObjectStore,
    listingObjectStore
} from './database/transactions'

//`connection e database` são as configurações iniciais do banco
const connection = {
    name: "ecommerce-cart",
    version: 1
}
const database = {
    name: "ecommerce-cart",
    type: "readwrite"
}

//Função para adicionar um produto no indexedDb
export const addProduct = (itemProduct) => {

    indexedDatabase(connection)
        .then(connection => {

            //Listar todos os itens no localstorage
            listingObjectStore(connection, database)
                .then(itensCart => {
                    const repeat = repeatItems(itemProduct, itensCart)
                    if (repeat === false) {
                    } else {
                        addObjectStore(connection, database, itemProduct)
                    }
                }).catch(err => new Error(err))
        })
        .catch(error => new Error(error))
}



/* Listar todos os objetos para saber se o usuario não
 * adicionou nenhum item repetido ao carrinho */

/* switch (searchItemProduct) {
//Só vai ser null quando não existir nenhum item no localstorage
case null:
    listProduct.push(itemProduct)
    const convertForStringItemProduct = JSON.stringify(listProduct)
    saveItem(convertForStringItemProduct)
    break;

// Vai executar quando já tiver algo no localstorage
default:
    const convertStringForObject = JSON.parse(searchItemProduct)
    for (const { _id } of convertStringForObject) {
        itensCart.push(_id)
    }
    const productExist = itensCart.includes(itemProduct._id)
    if (!productExist) {
        product(itemProduct)
    }
    break;
}

//Adicionar o produto em uma lista
const product = (itemProduct) => {
listProduct.push(itemProduct)
saveItem(JSON.stringify(listProduct))
}
//Salvar o produto no localstorage
const saveItem = (item) => {
return localStorage.setItem("cart", item)
}
export const searchItem = () => (localStorage.getItem("cart"))
*/

