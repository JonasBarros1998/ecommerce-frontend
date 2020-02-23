/**
 * Actions responsavel por filtrar todas as categorias dos produtos 
 * cadastrados no banco de dados
 */

import { verb } from '../../../../../../utils/http/verbs'
import { routes } from '../../routes/shop.routes'
import { HttpHeaders as header } from '../../../../../../utils/header/headers'
import { FILTER_MAKE } from '../../constants/index.constants'

const receiverMake = (listingMake) => {
    return {
        type: FILTER_MAKE,
        listingMake
    }
}

const uriMake = routes.filter.allMake
export const make = () => {
    return dispatch => {
        return verb.get(uriMake,
            header.defaultHeaders())
            .then(response => {
                dispatch(receiverMake(response))
            })
            .catch(err => new Error(err))
    }
}