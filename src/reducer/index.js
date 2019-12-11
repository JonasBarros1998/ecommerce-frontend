import {combineReducers} from 'redux';
//import {authenticationUser} from './authentication.reducer';
//import {verifield} from './verifield.reducer'
import {authenticationUser} from '../funcionalities/authentication/reducer/authentication.reducer'
import {verifield} from '../funcionalities/authentication/reducer/verifield.reducer'

export const Reducers = combineReducers({
    authentication: authenticationUser,
    verificateEmail: verifield //verificar se o e-mail existe
})

