import {saveLocalStorage, searchLocalStorage} from '../../../utils/localstorage/index'
import {EXIST_LOCALSTORAGE, NOT_EXISTS_LOCALSTORAGE} from '../constants/index.constants'
/**
 *  Params: localStorage: Tem que ser recebido um objeto
 */
export const searchStorage = (localStorage) => {
    const search = searchLocalStorage(localStorage.key)
    if(search === null){
        return {response: NOT_EXISTS_LOCALSTORAGE}
    }
    else{
        return {reponse: EXIST_LOCALSTORAGE}
    }
}

export const saveStorage = (storage) => {
    saveLocalStorage(storage.key, storage.value)
}
/**Desenvolver outra função para salvar os dados no local storage */