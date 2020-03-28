/**Arquivo para configuração em geral do banco de dados indexedDb*/

/**
 * @param  connection Um objeto contendo todas as informações do banco de dados
 */

let connect;
/**
 * 
 * @param  connection Um objecto javaScript com o nome e a versão do banco
 */
export const indexedDatabase = (connection) => {

    const openRequest = window.indexedDB.open(connection.name, connection.version)

    return new Promise((resolve, reject) => {
        //cria ou altera um banco já existente
        openRequest.onupgradeneeded = (e) => {
            console.log('cria ou altera um banco já existente')
            const result = e.target.result
            if (result.objectStoreNames.contains(connection.name)) {
                result.deleteObjectStore(connection.name)
            }
            result.createObjectStore(connection.name, { keyPath: '_id' })
        }

        //Faz a conexão com o banco de dados
        openRequest.onsuccess = (e) => {
            //console.log("Cria uma conexão com o banco")
            connect = e.target.result
            resolve(connect)
        }

        //Se houver algum erro durante o processo de criação ou conexão com o banco
        openRequest.onerror = (e) => {
            //console.error(e.target.error)
            reject(e.target.error)
        }
    })
    //const openRequest = window.indexedDB.open(connection.name, connection.version)








}