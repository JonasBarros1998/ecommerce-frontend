/**
 * Esse arquivo tem como responsabilidade somar o 
 */
export const update = (newValue) => ({ type: "UPDATE", newValue })
let value = 0
let calculate = 0

/**
 * @param cart Um array com todos os itens do produto
 * @param addValue O valor do produto
 */
export const total = (cart = [], addValue = 0) => {
    if (addValue === 0) {
        for (let { price } of cart) {
            value += price
        }
        calculate += value
        return calculate
    }
    else {
        return (dispatch) => {
            calculate += addValue
            return dispatch(update(calculate))
        }
    }
}

/**
 * Função para subtrair o valor valor total do carrinho
 * @param cart Todos os produtos do carrinho
 * @param price O preço em que estou alterando
 */
export const decrement = (priceCurrent, quantity) => {
    return dispatch => {
        if (quantity > 1) {
            const decrementValue = calculate - priceCurrent
            calculate = decrementValue
            dispatch(update(decrementValue))
        }else{
            dispatch(update(calculate))
        }
    }
}
