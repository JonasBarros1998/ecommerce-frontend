const store = {
    value: 0,
    products: {}
}

export const cart = (initState = store, action) => {
    switch (action.type) {
        case "UPDATE":
            return Object.assign({}, initState, {
                value: action.newValue
            })

        case "CART_COMFIRMATION":
            return Object.assign({}, initState, {
                products: action.products
            })

        default:
            return store
    }
}