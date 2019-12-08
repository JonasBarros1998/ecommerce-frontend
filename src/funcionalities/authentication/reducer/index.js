import {combineReducers} from 'redux';
import {authenticationUser} from './authentication.reducer';


export const Reducers = combineReducers({
    submitLogin: authenticationUser
})