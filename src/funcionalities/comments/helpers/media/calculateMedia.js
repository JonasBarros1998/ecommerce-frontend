/**
 * Metodo para calcular a media dos comentario
 * 
 * Para realizar o calculo, faremos: 
 * soma de todas as notas divido pelo total de comentarios
 * Ex: some_das_notas / total_de_comentarios
 * 
 * Parametros: por padrão tem que receber um unico objeto de arrays
 * ex: {1: [...], 2: [...], 3: [...]} 
 * 
 * A função já retorna a media das notas dos usuarios
 */
let totalAvaliation = 0
export const calculate = (datas) =>{ 
    datas.map(itemMedia=> (
        totalAvaliation += itemMedia.avaliation 
    ))
    const result = (totalAvaliation / datas.length)
    return result.toFixed(1)
}


