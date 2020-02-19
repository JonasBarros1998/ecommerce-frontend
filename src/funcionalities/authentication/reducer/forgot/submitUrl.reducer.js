import {
    USER_NOT_EXIST,
    SUBMIT_EMAIL,
} from '../../constants/index.constants'

const state = {
    username: "",
    submitUrl: {
        submitMessage: false,
        title: "",
        text: "",
        textFooter: ""
    }
}

export const submitUrl = (initState = state, action) => {
    switch (action.type) {
        
        case USER_NOT_EXIST:
            return Object.assign({}, initState, {
                username: "Esse usuário não existe."
            })
        case SUBMIT_EMAIL:
            return Object.assign({}, initState, {
                submitUrl: {
                    submitMessage: true,
                    title: "Enviado!",
                    text: `Caso não visualizar o e-mail na sua caixa de entrada, 
                    não se squeça de visualizar também na caixa de spam.`,
                }
            })
        default:
            return state
    }
}