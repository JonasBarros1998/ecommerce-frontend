import { route } from '../routes/index.routes'
import { verb } from '../../../../utils/http/verbs'
import { HttpHeaders } from '../../../../utils/header/headers'
import { SLIDES_LINKS } from '../constants/slide.constants'

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
            .then(result => {
                dispatch(receiverSlidesUrls(result.response))
            })
            .catch(error => new Error(error))
    }
}
