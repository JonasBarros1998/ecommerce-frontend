import {
    USER_NOT_EXIST,
    SUBMIT_EMAIL,
} from '../../constants/index.constants'

const state = {
    username: false,
    submitMessage: false,
}

export const submitUrl = (initState = state, action) => {
    switch (action.type) {
        case USER_NOT_EXIST:
            return Object.assign({}, initState, {
                username: true
            })
        case SUBMIT_EMAIL:
            return Object.assign({}, initState, {
                submitMessage: true
            })
        default:
            return state
    }
}