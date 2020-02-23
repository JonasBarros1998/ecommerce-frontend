import { combineReducers } from 'redux'
import { authenticationUser } from '../funcionalities/authentication/reducer/authentication.reducer'
import { verifield } from '../funcionalities/authentication/reducer/verifield.reducer'
import { register } from '../funcionalities/user/reducer/register.reducer'
import { alterPassword } from '../funcionalities/authentication/reducer/forgot/forgotPwd.reducer'
import { submitUrl } from '../funcionalities/authentication/reducer/forgot/submitUrl.reducer'
import { mainSlides } from '../funcionalities/slides/main/reducers/slides.reducer'
import { productDetails } from '../funcionalities/products/reducers/product.reducer'
import { listingComment } from '../funcionalities/comments/reducer/listComment.reducer'
import { categories } from '../funcionalities/products/shop/categories/reducers/categories.reducers'
import { mainProducts } from '../funcionalities/products/shop/mainProducts/reducer/mainProduct.reducer'
import { productsSpecials } from '../funcionalities/products/shop/productsSpecials/reducer/productsSpecials.reducer'
import { products } from '../funcionalities/products/shop/productsShop/reducer/filter/products.reducer'

export const Reducers = combineReducers({
   authentication: authenticationUser,
   verificateEmail: verifield,
   alterPassword: alterPassword,
   submitUrl: submitUrl,
   registerUser: register,
   mainSlide: mainSlides,
   listingComment: listingComment,
   productDetails: productDetails,
   products: products,
   categorie: categories,
   mainProduct: mainProducts,
   productsSpecials: productsSpecials
})