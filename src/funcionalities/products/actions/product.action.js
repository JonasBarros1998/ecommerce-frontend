import { routes } from '../routes/product.routes'
import { verb } from '../../../utils/http/verbs'
import { tratament } from '../utils/links/urlsTratament'
import { PRODUCT } from '../constants/product.constants'
import { format } from '../utils/objects/formattingObjects'

const productDetails = product => {
    return {
        type: PRODUCT,
        product
    }
}

export const listingProductDetails = (pathname) => {
    //Chamando o metodo 'tratament' para extração de dados 
    //para encaixarmos na url
    const {categorie, idProduct} = tratament(pathname)
    
    return dispatch => {
        const urlProduct = routes.product(idProduct, categorie)
        return verb.get(urlProduct)
        .then(response => {
            console.log("response", response)    
            const result = format(response)
            console.log("result", result)    
            dispatch(productDetails(result))
        }).catch(erro => new Error(erro))
    }
}