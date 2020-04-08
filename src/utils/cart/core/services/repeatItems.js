/**
 * @param itemCurrent Um array do objeto que está sendo adicionado ao carrinho
 * @param itens Todos os items do carrinho, pode ser um array vazio, se o carrinho estiver vazio
 */

export const repeatItems = (itemCurrent, itens) => {

    //Veriavel de controle
    let AddItemCart = true;
    /* Se não tiver nada no carrinho, já podemos adicionar um 
        produto nele sem realizar uma verificação*/
    if (itens.length === 0) {
        AddItemCart = true;
    }

    /* Realiza uma verificação se já existe o produtos 
        que o cliente adicionou no carrinho*/
    for (const { _id } of itens) {
        if (_id === itemCurrent._id) {
            return AddItemCart = false
        }
    }
}
