import {LIST_COMMENT, PRODUCT} from '../constants/comment.constants'

const state = { 
    comments: []
}

/** **ATENÇÃO LEIA ANTES DE FAZER ALGUMA ALTERAÇÃO**
 *          Explicação sobre o case Product
 *  Tivemos que colocar o case Product dentro desse reducer, 
 * pelo motivo que algumas vezes vinha para esse reducer a
 * a action.type Product, como não tinhamos o 'PRODUCT'
 * definido dentro do case, o resultado era o 
 * state comment ficando vazio, e não renderizando os comentarios. 
 */

export const listingComment = (initState = state, action) => {
    console.log("listingComment ", action.type)
    switch (action.type) {
        case LIST_COMMENT:
            console.log("action.LIST_COMMENT ", action.comments)
            return Object.assign({}, initState, {
                comments: action.comments
            })
        case PRODUCT:
            return Object.assign({}, initState, {
                product: action.product
            })
        default:
            return state
    }
}