const saveLocalStorage = (value, name) =>{
    return localStorage.setItem(name, value)
}

const deleteLocalStorage = () =>{
    throw new Error("Função de token ainda não implementada")
}

const searchLocalStorage = (value, name) =>{
    return localStorage.getItem(name, value) 
}

export {saveLocalStorage, deleteLocalStorage, searchLocalStorage}