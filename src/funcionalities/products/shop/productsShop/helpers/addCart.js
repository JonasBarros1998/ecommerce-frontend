/**
 * Metodo para fazer a chamada da função de adicionar o produto
 * ao carrinho
 */
import { addProduct } from '../../../../../utils/cart/core/controllers/addProduct'
import { FormattingObjectAddCart } from '../utils/shoppingFormattingObjects'

export const addCart = (product) => {
    console.log(product)
    // formatar o objeto
    const formattingObject = FormattingObjectAddCart(product)
    //adicinar o produto no carrinho
    addProduct(formattingObject)
}