import { createBrowserHistory } from 'history'
import { route } from '../routes/index.routes'
import { verb } from '../../../../utils/http/verbs'
import { HttpHeaders } from '../../../../utils/header/headers'
import { SLIDES_LINKS } from '../constants/slide.constants'
import {links} from '../../../../utils/links/gearLinks'

const receiverSlidesUrls = links => {
    return {
        type: SLIDES_LINKS,
        links
    }
}

export const slides = () => {

    const url = route.slide['nameSlide']
    const headers = HttpHeaders.defaultHeaders()

    return dispatch => {
        return verb.get(url, headers)
            .then(response => {
                const responseListLinks = links('ecommerce-slide', response)
                console.log("Minha action foi carregada", responseListLinks)
                dispatch(receiverSlidesUrls(responseListLinks))
            })
            .catch(error => new Error(error))
    }
}
