import { indexedDatabase } from '../database/indexedDatabase.js'
import { listingObjectStore } from '../database/transactions'

const database = {
    name: 'ecommerce-cart',
    version: 1,
    type: 'readwrite'
}

export const listingAllProducts = () => {
    indexedDatabase(database)
        .then(connection => {
            listingObjectStore(connection, database)
                .then(response => {
                    return response
                })
        })
        .catch(error => new Error(error))
}


