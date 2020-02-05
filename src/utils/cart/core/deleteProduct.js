const searchLocalStorage = () => (JSON.parse(localStorage.getItem('cart')))

const saveLocalStorage = (itensCart) => (JSON.stringify(localStorage.setItem('cart', itensCart)))

export const deleteProduct = (productId) =>{
    const newCart = []
    const setLocalStorage = searchLocalStorage()

    setLocalStorage.map(item => {
        if(productId !== item._id){
            newCart.push(item)
        }
    })
    saveLocalStorage(newCart)
}