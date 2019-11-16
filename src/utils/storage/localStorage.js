class LocalStorage{

    static addStorage(key, value){
        return localStorage.setItem(key, value)
    }

    static deleteStorage(key){
        return localStorage.removeItem(key)
    }

}

export default LocalStorage