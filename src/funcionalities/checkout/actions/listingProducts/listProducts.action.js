/**Action para fazer a listagem de todos os produtos comprado pelo cliente, 
 * que estão armazendos no carrinho de compras
 */

import {verb} from '../../../../utils/http/verbs' 
import {HttpHeaders as header} from '../../../../utils/header/headers' 
import { sumValue } from '../../services/CalculatePrice'
import {
    LISTING_ALL_PRODUCTS
} from '../../constants/checkout.constants'

const listingAllProducts = (products) =>({type: LISTING_ALL_PRODUCTS, products})

export const listingProducts = () =>{
    //const httpHeader = header.defaultHeaders()
    
    return dispatch =>{
        const totalSumPrice = sumValue()
        const products = [{
            price: totalSumPrice
        }]
        dispatch(listingAllProducts(products))
        //const url = verb.get('', httpHeader)
        //.then(response =>{
        //    dispatch()
        //    console.log(response)
        //})
    }
}
