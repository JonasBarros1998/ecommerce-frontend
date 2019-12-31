import { routes } from '../routes/product.routes'
import { verb } from '../../../utils/http/verbs'
import { tratament } from '../utils/links/urlsTratament'
import { PRODUCT } from '../constants/product.constants'
import { format } from '../utils/format/formatObject'

const productDetails = product => {
    return {
        type: PRODUCT,
        product
    }
}

export const listingProductDetails = (pathname) => {
    //Chamando o metodo para extração de dados 
    //especificos das  urls
    const {categorie, idProduct} = tratament(pathname)
    
    return dispatch => {
        const urlProduct = routes.product(idProduct, categorie)

        return verb.get(urlProduct).then(response => {
            const newResponse = format(response)
            dispatch(productDetails(newResponse))
        }).catch(erro => new Error(erro))
    }
}