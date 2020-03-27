/**
 * Modulo para adicionar os produtos no carrinho, e salvar no localstorage
 */
import { indexedDatabase } from '../database/indexedDatabase'
import { repeatItems } from '../services/repeatItems'
import {
    addObjectStore,
    listingObjectStore
} from '../database/transactions'

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
                    //Chama a função para verificar se o produto que o cliente está adicionar já existe no carrinho 
                    const repeat = repeatItems(itemProduct, itensCart)
                    if (repeat === false) {
                        return null
                    } else {
                        //Se o produto, não exister, adiciona ele no carrinho
                        addObjectStore(connection, database, itemProduct)
                    }
                }).catch(err => new Error(err))
        })
        .catch(error => new Error(error))
}

