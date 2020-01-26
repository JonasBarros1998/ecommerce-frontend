import { route } from "../routes/productsSpecials.route";
import { HttpHeaders } from '../../../../../utils/header/headers'
import { verb } from '../../../../../utils/http/verbs'
import { PRODUCTS_SPECIALS } from '../constants/productsSpecials.constants'

const products = productsSpecials => {
    return {
        type: PRODUCTS_SPECIALS,
        productsSpecials
    }
}

export const productSpecials = () => {
    const header = HttpHeaders.defaultHeaders()
    const url = route.productsSpecials.list

    return dispatch => {
        return verb.get(url, header)
            .then(response => {
                dispatch(products(response))
            })
            .catch(err => Error(err))
    }
}