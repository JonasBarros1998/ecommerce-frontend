/**
 * Modulo para adicionar os produtos no carrinho, e salvar no localstorage
 */
import { indexedDatabase } from '../database/indexedDatabase'
import { repeatItems } from '../services/repeatItems'
import { property } from '../services/propertyQuantity'
import {
    addObjectStore,
    listingObjectStore
} from '../database/transactions'

//`connection e database` são as configurações iniciais do banco
const database = {
    name: "ecommerce-cart",
    type: "readwrite",
    version: 1
}

//Função para adicionar um produto no indexedDb
export const addProduct = (itemProduct) => {
    property(itemProduct)
    indexedDatabase(database)
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

