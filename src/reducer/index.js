import {combineReducers} from 'redux';
import {authenticationUser} from '../funcionalities/authentication/reducer/authentication.reducer'
import {verifield} from '../funcionalities/authentication/reducer/verifield.reducer'
import {register} from '../funcionalities/user/reducer/register.reducer'
import {mainSlides} from '../funcionalities/slides/main/reducers/slides.reducer'
import {productDetails} from '../funcionalities/products/reducers/product.reducer'

export const Reducers = combineReducers({
    authentication: authenticationUser,
    verificateEmail: verifield, 
    registerUser: register, 
    mainSlide: mainSlides,
    productDetails: productDetails
})

