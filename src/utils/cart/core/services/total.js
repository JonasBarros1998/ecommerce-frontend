/**
 * Esse arquivo tem como responsabilidade somar o 
 * valor total de produtos no carrinho
 */
export const update = (newValue) => ({ type: "UPDATE", newValue })

let value = 0
let calculate = 0
export const total = (cart = [], addValue = 0) => {

    return (dispatch) => {

        if (addValue === 0) {
            for (let { price } of cart) {
                value += price
            }
            calculate += value
            return dispatch(update(calculate))
        }
        else {
            calculate += addValue
            return dispatch(update(calculate))
        }
    }


}

/**
 * Função para atualizar os produtos do carrinho
 * 
 * @param cart Todos os produtos do carrinho
 * @param price O preço em que estou alterando
 */
export const sumQuantity = (cart = [], price) => {
    let updateValue = 0
    let valueCurrent = 0
    ////Preço atual do carrinho do carrinho
    //for (let { price } of cart){
    //    updateValue += price 
    //}
    //valueCurrent = updateValue + price
    //return valueCurrent
}
