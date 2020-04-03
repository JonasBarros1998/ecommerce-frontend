/**
 * Arquivo especifico para buscar o id_client, para que possamos fazer a consulta do que o cliente comprou
 */
export const pathname = () => {
    //fazer a basca na url so pathname
    const pathname = window.location.pathname
    //dividir o pathname em barras, e adicionar em um array 
    const splitPathname = pathname.split('/')
    //Pegar a ultima posição do array, no qual é o client_id
    const client_id = splitPathname[2]
    return client_id
}