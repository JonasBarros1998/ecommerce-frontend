import { route } from "../routes/categorie.route";
import { HttpHeaders } from '../../../../../utils/header/headers'
import { verb } from '../../../../../utils/http/verbs'
import {LISTING_CATEGORIES} from '../constants/categories.constants'

const typeCategories = categories =>{
    return {
        type: LISTING_CATEGORIES,
        categories
    }
}

export const categorie = () => {
    const url = route.categories['list']
    const header = HttpHeaders.defaultHeaders()

    return dispatch => {
        return verb.get(url, header)
        .then(result => {
            dispatch(typeCategories(result))
        })
        .catch(err =>Error(err))
    }
}