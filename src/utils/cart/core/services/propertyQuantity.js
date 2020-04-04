/**
 * Arquivo especifico para adicionar a propriedade quantity, 
 * do objeto do produto a ser adicionado no carrinho.
 */

export const property = (item) => {
    if(item.quantity === undefined) {
        Object.defineProperties(item, {
            'quantity': {
                value: 1,
                writable: true,
                enumerable: true
            }
        })
    }else{
        return item
    }
}