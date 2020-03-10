/**
 * função responsavel por salvar informações 
 * dentro do localStorage do navegador
 * 
 * Parametros a serem passados: 
 * @param name Key(chave) identificando o objeto a ser salvo
 * @param  value Os valores a serem salvos pode ser dos seguintes tipos: ( String, int, boejct)
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

/**
 * @param  name Tipo String com o nome da chave(key), 
 * que identifica algum item no localstorage
 */
export const searchLocalStorage = (name) =>{
    return localStorage.getItem(name)
}
