/**
 * Actions responsavel por listar todos os produtos vendidos 
 * no ecommerce.
 */

import { verb } from '../../../../../../utils/http/verbs'
import { routes } from '../../routes/shop.routes'
import { HttpHeaders as header } from '../../../../../../utils/header/headers'
import { SHOPPING } from '../../constants/index.constants'
import { formattingObjectShopping } from '../../utils/shoppingFormattingObjects'

const receiverProducts = (shopping) => {
    return {
        type: SHOPPING,
        shopping
    }
}

const uriProduct = routes.shopping.products()
export const products = () => {
    return dispatch => {
        return verb.get(uriProduct,
            header.defaultHeaders())
            .then(response => {
                formattingObjectShopping(response)
                dispatch(receiverProducts(response))
            })
            .catch(err => new Error(err))
    }
}