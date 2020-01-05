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

export const deleteLocalStorage = () =>{
    throw new Error("Função ainda não implementada")
}

export const searchLocalStorage = (name) =>{
    return localStorage.getItem(name) 
}
