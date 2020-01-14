import {saveLocalStorage, searchLocalStorage} from '../../../utils/localstorage/index'
import {EXIST_LOCALSTORAGE, NOT_EXISTS_LOCALSTORAGE} from '../constants/index.constants'
/**
 *  Params: localStorage: Tem que receber um objeto
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
//Função para salvar dados no localStorage
export const saveStorage = (storage) => {
    saveLocalStorage(storage.key, storage.value)
}