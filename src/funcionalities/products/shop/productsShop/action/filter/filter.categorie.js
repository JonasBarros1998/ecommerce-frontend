/**
 * Actions responsavel por filtrar todas as categorias dos produtos 
 * cadastrados no banco de dados
 */

import { verb } from '../../../../../../utils/http/verbs'
import { routes } from '../../routes/shop.routes'
import { HttpHeaders as header } from '../../../../../../utils/header/headers'
import { FILTER_CATEGORIES } from '../../constants/index.constants'

const receiverCategories = (listingCategories) => {
    return {
        type: FILTER_CATEGORIES,
        listingCategories
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