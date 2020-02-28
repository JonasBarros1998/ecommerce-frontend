/**
 * Actions responsavel por filtrar todas as categorias dos produtos 
 * cadastrados no banco de dados
 */

import { verb } from '../../../../../../utils/http/verbs'
import { routes } from '../../routes/shop.routes'
import { HttpHeaders as header } from '../../../../../../utils/header/headers'
import {  formattingObjectShopping } from '../../utils/shoppingFormattingObjects'
import { 
    FILTER_CATEGORIES, 
    SHOPPING
 } from '../../constants/index.constants'


const receiverCategories = (listingCategories) => {
    return {
        type: FILTER_CATEGORIES,
        listingCategories
    }
}

const receiverSelectCategorie = (shopping) => {
    return {
        type: SHOPPING,
        shopping
    }
}

const uriCategorie = routes.filter.allCategories
export const categories = () => {
    return dispatch => {
        return verb.get(uriCategorie,
            header.defaultHeaders())
            .then(response => {
                dispatch(receiverCategories(response))
            })
            .catch(err => new Error(err))
    }
}

/**
 * Quando o usuairo clicar em uma categoria, a
 * função vai fazer uma requisição na para api para trazer todos 
 * os produtos relacionados com aquela categoria 
 */
export const selectCategorie = (categorie) => {
    const uriCategorie = routes.selectFilter.selectCategorie(categorie)
    return dispatch => {
        return verb.get(
            uriCategorie,
            header.defaultHeaders())
            .then(response => {
                formattingObjectShopping(response)
                dispatch(receiverSelectCategorie(response))
            })  
            .catch(err => new Error(err))
    }
}