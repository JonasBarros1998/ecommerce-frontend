import { indexedDatabase, updateObjectStore } from '../../../indexed-db/core/database'

const database = {
    name: "ecommerce-cart",
    version: 1,
    type: 'readwrite' 
}

export const updateProduct = (item, quantity) => {

    const search = { 
        id: item._id
    }

    item.quantity = quantity
    
    indexedDatabase(database)
    .then(connection => {
        updateObjectStore(connection, database, search, item)
        .then(response =>{}).catch(err => new Error(err))
    }).catch(err => new Error(err))
}