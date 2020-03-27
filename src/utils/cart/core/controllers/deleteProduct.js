import { indexedDatabase } from '../database/indexedDatabase'
import {
    deleteObjectStore
} from '../database/transactions'

const connect = {
    name: "ecommerce-cart",
    version: 1
}

const database = {
    name: "ecommerce-cart",
    type: "readwrite"
}

export const deleteProduct = (data) => {
    indexedDatabase(connect)
    .then(connection => {
        deleteObjectStore(connection, database, "5e3c663e03ca1a75379338ec")
    })
    .catch(error => new Error(error))
}