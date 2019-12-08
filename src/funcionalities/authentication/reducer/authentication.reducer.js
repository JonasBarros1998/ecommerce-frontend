const initState = {
    message: ""
}

export const authenticationUser = (state = initState, action) =>{

    if(action.type === "SUBMIT_LOGIN"){
        console.log(action)
        return initState.message = "acion"
        
    }else{
        return initState.message = "Retornando o reducer dentro do authentication.reducer.js"
    }

}