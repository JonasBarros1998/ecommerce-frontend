/**
 * Função especifica para formatação de objetos. 
 * Nesse caso o objeto a ser formatado, é o media. 
 * Como ela vem do banco de dados como uma string, 
 * temos que modificar o objeto media para substituir a string para um array
 */
import { formatting } from '../../../../../utils/objects/formatting'
export const formattingObjectShopping = (datas) => {
    datas.map(item => {
        return Object.defineProperties(item, {
            'media': {
                value: formatting(item.media),
                writable: true
            }
        })
    })
}

/**
 * Função para formatar o objeto, para ficar em conformidade
 * com o objeto que o carrinho solicita.
 * @param  datas Objeoto contendo informaçoes do produto 
 */
export const FormattingObjectAddCart = (datas) => {
    return {
        ...datas,
        '_id': datas.id,
        'link': datas.media.media[0]
    }
}


