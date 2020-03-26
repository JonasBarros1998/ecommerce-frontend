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

    //Caso houver algum erro na função onerror
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