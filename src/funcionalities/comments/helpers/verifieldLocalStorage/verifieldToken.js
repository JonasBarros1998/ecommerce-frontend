/**
 * Modulo responsável por verificar se 
 * existe o token dentro do navegador do 
 * usuario. 
 * Funciona basicamente dessa forma: 
 * Caso o token existir não retornamos nada, 
 * porém caso o token não existir, redirecionamos 
 * para a pagina de login.
 * 
 * O Parametro 'token' tem que ser um array, 
 * e dentro desse array, tem que estar o nome 
 * dos campos no qual você quer verificar.*/

import {createBrowserHistory} from 'history' 
import {searchLocalStorage} from '../../../../utils/localstorage'

const history = createBrowserHistory({forceRefresh: true})

const routeChange = url => {
    return history.push(url)
}

export const verifieldToken = (token, url) => {
    let Exist = true
    token.map(name => {
        const search = searchLocalStorage(name)
        if(search == null){
            Exist = false
        }
    })
    if(Exist == false){
        return routeChange(url)
    }
}
