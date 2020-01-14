import { calculate } from '../media/calculateMedia'
import { avaliations } from '../avaliation/usersAvaliation'
/**
 * Função com o unico objetivo de chamar as demais função para
 * formatação de objetos. Nessa caso está sendo adicionado ao 
 * objeto 'datas' lista de quantas pessoas deram estrelas, e a
 * media das notas dos clientes que deram para aquele produto.
 * Ela deve receber um array de objetos, como exemplificado abaixo.
 * Param: datas = [{...}, {...}, {...}]
 */
export const listObjectComment = (datas) => {
    const copyDatas = datas
    const avaliarionUser = addObjectQuantityUsers(datas)
    return Object.assign([{}], copyDatas, {
        ...datas,
        oneStar: avaliarionUser.one,
        twoStar: avaliarionUser.twoStar,
        threeStar: avaliarionUser.threeStar,
        fourStar: avaliarionUser.fourStar,
        fiveStar: avaliarionUser.fiveStar,
        media: addObjectMedia(datas)
    })
}

/**
 * Função para formatar o objeto para que seja enviado 
 * para o bakcend da forma em que ele aceita
 */
export const formatting = (datas, userId = {}) => {
    return Object.assign({}, datas, {
        user_id: userId,
        comment : datas.comment,
        product: datas.product,
        avaliation: datas.avaliation
    })
}

/*comments = Comments(
    name = nameUser,
    comment = request.data["comment"],
    avaliation = request.data['noteProduct'])
comments.save()*/

/**
 * Função para retornar a lista completa de 
 * comentarios com com a media de notas já calculada. 
 */
export const addObjectMedia = (datas) => (calculate(datas))

/**
 * Função para formatação de objeto para listagem de
 * essa função tem como objetivo montar um objeto de quantos
 * usuario deram cada estrela
 * Ex:  2 usuario deram 4 estrelas
 *      4 usuarios deram 2 estrelas
 *      10 usuario deram 5 estrelas
 */
export const addObjectQuantityUsers = (datas) => (avaliations(datas))