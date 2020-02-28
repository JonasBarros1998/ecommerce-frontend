/**
 * Modulo para adicionar os produtos no carrinho, e salvar no localstorage
 */

let listProduct = []

export const addProduct = (itemProduct) => {

    const searchItemProduct = searchItem()

    switch (searchItemProduct) {
        /**
         * Só vai ser null quando não existir nenhum item no localstorage
         */
        case null:
            listProduct.push(itemProduct)
            const convertForStringItemProduct = JSON.stringify(listProduct)
            saveItem(convertForStringItemProduct)
            break;
        
        /**
         * Vai executar quando já tiver algo no localstorage
         */
        default:
            const itensCart = []
            const convertStringForObject = JSON.parse(searchItemProduct)
            for (const { _id } of convertStringForObject){
                itensCart.push(_id)
            }
            const productExist = itensCart.indexOf(itemProduct._id)
            if(productExist === -1){
                product(itemProduct)
            }
            break;
    }
}

//Adicionar o produto em uma lista
const product = (itemProduct) => {
    listProduct.push(itemProduct)
    saveItem(JSON.stringify(listProduct))
}
//Salvar o produto no localstorage
const saveItem = (item) => {
    return localStorage.setItem("cart", item)
}

export const searchItem = () => (localStorage.getItem("cart"))

