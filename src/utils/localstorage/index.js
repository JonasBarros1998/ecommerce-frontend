/**
 * Modulo responsavel por salvar informações 
 * dentro do localStorage do navegador
 * 
 * Parametros a serem passados: 
 * value: O conteudo da informação que deseja salvar
 * name: nome relacionado ao conteudo que foi salvo
 */
export const saveLocalStorage = (name, value) =>{
    return localStorage.setItem(name, value)
}

/**
 * Função para apagar um item do localStorage
 * Parametro: nome do item identificador do localStorage
 */
export const deleteLocalStorage = (name) =>{
    return localStorage.removeItem(name)
}   

export const searchLocalStorage = (name) =>{
    return localStorage.getItem(name) 
}
