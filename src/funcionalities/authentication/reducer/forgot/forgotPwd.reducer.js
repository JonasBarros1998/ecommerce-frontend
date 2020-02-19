import {
    EASY_PASSWORD,
    COUNT_INVALID,
    EQUAL_PASSWORD,
    REDIRECT
} from '../../constants/index.constants'

const state = {
    password: "",
    username: "",
    equalPassword: "",
    submitUrl: {
        submitMessage: false,
        title: "",
        text: "",
        textFooter: ""
    }
}

export const alterPassword = (initState = state, action) => {
    switch (action.type) {
        case EASY_PASSWORD:
            return Object.assign({}, initState, {
                password: "A senha é muito fácil, por favor digite uma senha mais difícil."
            })
        case COUNT_INVALID:
            return Object.assign({}, initState, {
                password: "Digite uma senha com mais de 8 caracteres."
            })
        case EQUAL_PASSWORD:
            return Object.assign({}, initState, {
                equalPassword: `As senhas não se coincidem.`
            })
        default:
            return state
    }
}