import CartContainer from '../core/container/cartContainer'

let listProduct = []

export const addProduct = (itemProduct) => {

    const searchItemProduct = searchItem()

    switch (searchItemProduct) {
        case null:
            listProduct.push(itemProduct)
            const convertForStringItemProduct = JSON.stringify(listProduct)
            saveItem(convertForStringItemProduct)
            break;

        default:
            const itensCart = []
            const convertStringForObject = JSON.parse(searchItemProduct)
            for (const {_id: _id} of convertStringForObject){
                itensCart.push(_id)
            }
            const productExist = itensCart.indexOf(itemProduct._id)
            if(productExist === -1){
                product(itemProduct)
            }
            break;
    }
}

const product = (itemProduct) => {
    listProduct.push(itemProduct)
    saveItem(JSON.stringify(listProduct))
}

const saveItem = (item) => {
    const totalCart = localStorage.setItem("cart", item)
}

export const searchItem = () => (localStorage.getItem("cart"))

