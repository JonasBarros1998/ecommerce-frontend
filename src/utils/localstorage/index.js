/**
 * Modulo responsavel por salvar informações 
 * dentro do localStorage do navegador
 * 
 * Parametros a serem passados: 
 * value: O conteudo da informação que deseja salvar
 * name: nome relacionado ao conteudo que foi salvo
 */

export const saveLocalStorage = (value, name) =>{
    return localStorage.setItem(name, value)
}

export const deleteLocalStorage = () =>{
    throw new Error("Função de token ainda não implementada")
}

export const searchLocalStorage = (value, name) =>{
    return localStorage.getItem(name, value) 
}
