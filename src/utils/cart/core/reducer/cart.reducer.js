const store = {
    value: 0
}
export const cart = (initState = store, action) => {
    switch(action.type){
        case "UPDATE": 
        console.log(action.newValue)
            return Object.assign({}, initState, {
                value: action.newValue
            })
        default: 
            return store
    }
}