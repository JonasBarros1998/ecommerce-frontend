import { calculate } from '../media/calculateMedia'
import { avaliations } from '../avaliation/usersAvaliation'
import { convertDate } from '../../../../utils/dates/date'

/**
 * Função para formatar o objeto para que seja enviado 
 * para o bakcend da forma em que ele permite
 * 
 * @param datas:O comentario do cliente
 * @param date A data em que o cliente fez o comentario
 */
export const formatting = (datas, date) => {
    return Object.defineProperties(datas, {
        'date': {
            value: date,
            writable: true,
            enumerable: true
        }
    })
}

/**
 * Função com o objetivo de chamar as demais funções para
 * formatação de objetos. 
 * 
 * Nessa caso está sendo adicionado ao parametro 'datas' lista de 
 * quantas pessoas deram estrelas, e a media das notas dos clientes 
 * que deram para aquele produto.
 * 
 * O parametro datas deve receber um array de objetos, 
 * como este formato abaixo.
 * 
 * @param datas [{...}, {...}, {...}]
 */
export const listObjectComment = (datas) => {
    const copyDatas = datas
    const avaliarionUser = addObjectQuantityUsers(datas)
    const newObjectDate = addobjectConvertDates(datas)
    return Object.assign([{}], copyDatas, {
        ...newObjectDate,
        oneStar: avaliarionUser.one,
        twoStar: avaliarionUser.twoStar,
        threeStar: avaliarionUser.threeStar,
        fourStar: avaliarionUser.fourStar,
        fiveStar: avaliarionUser.fiveStar,
        media: addObjectMedia(datas)
    })
}

/**
 * Função para retornar a lista completa de 
 * comentarios com com a media de notas já calculada. 
 */
const addObjectMedia = (datas) => (calculate(datas))

/**
 * Função para formatação de objeto para listagem de estrelas.
 * 
 * @param datas Um array de objetos
 * 
 * Essa função tem como objetivo montar um objeto de quantos
 * usuario deram cada estrela
 * 
 * Ex:  2 usuario deram 4 estrelas
 * 
 *      4 usuarios deram 2 estrelas
 * 
 *      10 usuario deram 5 estrelas
 */
const addObjectQuantityUsers = (datas) => (avaliations(datas))

/** 
 * @param datas Deve receber um array
 * de objetos, contendo dentro o item date.
 * 
 * Ex: [{nome: "Jonas", date: yy/mm/dd}]
 */
const addobjectConvertDates = (datas) => {
    return datas.map(itemDate =>{
        return Object.assign({}, itemDate, {
            date: convertDate(itemDate.date, {format: 'PT_BR'})
        })  
    })  
}