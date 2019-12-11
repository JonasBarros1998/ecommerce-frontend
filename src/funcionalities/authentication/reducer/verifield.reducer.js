    import {VERIFIELD_EMAIL} from '../constants/index.constants'

const state = {
    statusEmail: false
}

export const verifield = (initState = state, action) =>{
    
    if(action.type === VERIFIELD_EMAIL){
        return{
            ...state,
            statusEmail: action.statusEmail
        }
    }else{
        return state
    }
}