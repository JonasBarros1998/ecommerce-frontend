import {
    VALIDATE_PASSWORD,
    INVALID_LEVEL_PASSWORD,
    COUNT_PASSWORD
} from '../constants/constants.user'

const state = {
    messageComparationPassword: "",
    messageLevelPassword: "",
    messageCountPassword: ""
}

export const register = (initState = state, action) => {

    if (action.type === VALIDATE_PASSWORD) {
        return Object.assign({}, initState, {
            messageComparationPassword: `As senhas são diferentes`,
            messageLevelPassword: '',
            messageCountPassword: ''
        })
    }

    if (action.type === INVALID_LEVEL_PASSWORD) {
        return Object.assign({}, initState, {
            messageComparationPassword: '',
            messageLevelPassword: `Não utilize senhas muito faceis de decifrar`,
            messageCountPassword: ''
        })
    }

    if (action.type === COUNT_PASSWORD) {
        return Object.assign({}, initState, {
            messageComparationPassword: '',
            messageLevelPassword: '',
            messageCountPassword: `Digite uma senha com mais de 8 caracteres`
        })
    }
    else {
        return state
    }
}