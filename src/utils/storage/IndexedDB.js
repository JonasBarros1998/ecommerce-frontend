import Authentication from '../authentication/Login.js/index.js'

class IndexedDB {

    constructor(nameDataBase, version) {

        this._nameDataBase = nameDataBase
        this._version = version
        this.connection = Object
        this.base = {}
    }

    _deleteIndexedDb() {
        window.indexedDB.deleteDatabase(this._nameDataBase)
    }

    _connection() {

        //Antes de conectar a base de dados, exclua a tabela existente
        this._deleteIndexedDb()
        return this.connection = window.indexedDB.open(this._nameDataBase, this._version)
    }

    save(tableName, values) {

        const connection = this._connection()

        connection.onupgradeneeded = event => {
            this.base = event.target.result
            const creatObjectStore = this.base.createObjectStore(tableName, { autoIncrement: true })

            creatObjectStore.transaction.oncomplete = event => {

                let baseTransaction = this.base.transaction(tableName, 'readwrite').objectStore(tableName)

                baseTransaction.add(values)

                baseTransaction.onerror = event => {
                    console.log("HELP")
                    throw new Error(event.target.value)
                }
            }
        }
    }

}


