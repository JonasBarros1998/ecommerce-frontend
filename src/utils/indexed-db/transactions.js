/**
 * @param connection Uma conexão com o banco de dados
 * @param database Informações do indexedDb
 * @param datas Dados que serão adicionados no indexed
 */
export const addObjectStore = (connection, database, datas) => {

    const transaction = connection.transaction([database.name], database.type)
    const store = transaction.objectStore(database.name)
    const requestdb = store.add(datas)

    //Se entrar nessa função quer dizer que os dados foram atualizando com sucesso
    requestdb.onsuccess = (e) => {
        console.log(e.target.result)
        //console.log("Dados do carrinho incluido com sucesso")
    }

    //Caso houver algum erro na função, irá ser avisado
    requestdb.onerror = (e) => {
        console.error(e.target.error)
    }
}

/**
 * Função para listagem de todos os dados no indexedDb
 * @param connection Um objeto com a connection de IndeedDb
 * @param {*} database Informações da sua databae que deseja fazer a listagem de dados
 */
export const listingObjectStore = (connection, database) => {

    return new Promise((resolve, reject) => {

        const transaction = connection.transaction([database.name], database.type)
        const store = transaction.objectStore(database.name)
        //const cursor = store.openCursor()

        store.getAll().onsuccess = (e) => {
            resolve(e.target.result)
        }
        store.getAll().onerror = (e) => {
            reject(e.target.name)
        }
    })
}

/**
 * Função para deletar algum item no indexedDb
 * @param connection Um objeto com a connection de IndeedDb
 * @param database Informações da sua databae que deseja fazer a listagem de dados
 * @param data uma string ou um int com o valor para ser deletado
 */
export const deleteObjectStore = (connection, database, data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        const request = connection.transaction([database.name], database.type)
            .objectStore(database.name)
            .delete(data.id);

        request.onsuccess = (e) => {
            resolve(e.target)
            console.log(e.target)
        }

        request.onerror = (e) => {
            reject(e.target.name)
            console.log(e.target.name)
        }
    })

}

/**
 * @param connection A conexão com o indexdDb
 * @param database A informações do banco de dados
 * @param data O Id do objeto para ser consultado 
 * @param update Qual dado deve ser atualizado
 */
export const updateObjectStore = (connection, database, data, dataUpdate) => {
    return new Promise((resolve, reject) => {
        const update = connection.transaction([database.name], database.type)
            .objectStore(database.name)
        const request = update.get(data.id)

        request.onerror = (e) => (console.log(e.target.name))

        request.onsuccess = (e) => {
            const requestUpdate = update.put(dataUpdate)
            requestUpdate.onsuccess = () => {
                resolve("Dados atualizado com sucesso")
                console.log("Dados atualizado com sucesso")
            }
            requestUpdate.onerror = (e) => (reject(e.target.name))
        }

    })
}