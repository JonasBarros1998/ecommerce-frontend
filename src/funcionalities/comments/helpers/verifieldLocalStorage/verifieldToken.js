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
/*
 *  Função para verrificar se existe o token no 
 *  navegador do usuario. 
 *  Parametros: 
 *  token: array, com os tokens que deseja verificar
 *  url: rota para qual voce seja redirecionar o usuario*/
export const verifieldLocalStorage = (token, url) => {
    let Exist = true
    token.map(name => {
        /* Pesquisa o token no localStorage, 
         * Se não exister, Exist será False, 
         * caso existir será true
         * 
         * Caso a variavel 'search', não encontrar nada, 
         * ela vai retornar null*/
        const search = searchLocalStorage(name)
        if(search === null){
            Exist = false
        }
        return Exist
    })
    /*Como o Exist é falso, automaticamente, 
     *o usuario será enviado para pagina de login*/
    if(Exist === false){
        return routeChange(url)
    }
}
