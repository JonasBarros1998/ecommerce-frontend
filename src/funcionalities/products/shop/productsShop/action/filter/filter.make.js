/**
 * Actions responsavel por filtrar todas as categorias dos produtos 
 * cadastrados no banco de dados
 */
import { verb } from '../../../../../../utils/http/verbs'
import { routes } from '../../routes/shop.routes'
import { HttpHeaders as header } from '../../../../../../utils/header/headers'
import { formattingObjectShopping } from '../../utils/shoppingFormattingObjects'
import { 
    FILTER_MAKE, 
    SHOPPING 
} from '../../constants/index.constants'

const receiverMake = (listingMake) => {
    return {
        type: FILTER_MAKE,
        listingMake
    }
}

const receiverSelectMake = (shopping) =>{
    return {
        type: SHOPPING,
        shopping
    }
}

const uriMake = routes.filter.allMake
export const make = () => {
    return dispatch => {
        return verb.get(uriMake,
            header.defaultHeaders())
            .then(response => {
                dispatch(receiverMake(response))
            })
            .catch(err => new Error(err))
    }
}

/** Função para fazer a chamada na api, quando o usuario selecionou 
 * qual a marca que deseja estar escolhendo
 */
export const selectMake = (make) => {
    const uri = routes.selectFilter.selectMake(make)
    return dispatch => {

        return verb.get(
            uri, 
            header.defaultHeaders())
            .then(response => {
                formattingObjectShopping(response)
                dispatch(receiverSelectMake(response))
            }).catch(err => new Error(err))
    }
} 