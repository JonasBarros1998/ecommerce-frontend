import {route} from "../routes/mainProduct.routes";
import {HttpHeaders} from '../../../../../utils/header/headers'
import {verb } from '../../../../../utils/http/verbs'
import {MAIN_PRODUCTS} from '../constants/maiProduct.contants'

const products = products =>{
    return {
        type: MAIN_PRODUCTS,
        products
    }
}

export const mainProduts = () => {
    const header = HttpHeaders.defaultHeaders()
    const url = route.products.list

    return dispatch => {
        return verb.get(url, header)
        .then(response => {
            dispatch(products(response))
        })
        .catch(err =>Error(err))
    }
}