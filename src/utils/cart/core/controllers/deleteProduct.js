import { indexedDatabase } from '../database/indexedDatabase'
import {
    deleteObjectStore
} from '../database/transactions'

const database = {
    name: "ecommerce-cart",
    type: "readwrite",
    version: 1
}

export const deleteProduct = async (data) => {
    indexedDatabase(database)
    .then(connection => {
        deleteObjectStore(connection, database, data)
    })
   await window.location.reload()
    .catch(error => new Error(error))
}