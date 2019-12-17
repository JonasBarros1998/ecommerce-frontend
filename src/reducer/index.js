import {combineReducers} from 'redux';
//import {authenticationUser} from './authentication.reducer';
//import {verifield} from './verifield.reducer'
import {authenticationUser} from '../funcionalities/authentication/reducer/authentication.reducer'
import {verifield} from '../funcionalities/authentication/reducer/verifield.reducer'
import {register} from '../funcionalities/user/reducer/register.reducer'

export const Reducers = combineReducers({
    authentication: authenticationUser,
    verificateEmail: verifield, 
    registerUser: register
})

