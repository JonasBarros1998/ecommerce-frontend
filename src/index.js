import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
} from "react-router-dom";

/* Imports de components do ecommerce */
import App from './App';
import { Reducers } from './reducer'
import ProductDetail from './components/products/pageDetails'
import Login from "./components/authentication/loginComponent";
import NewUser from './views/authentication/registerNewUser/newUser'
import CartComponent from './components/cart/cartComponent.js'
import SubmitUrlComponent from './components/authentication/forgot/submitUrlComponent'
import AlterPasswordComponent from './components/authentication/forgot/alterPasswordComponent'
import ShopComponent from './funcionalities/products/shop/productsShop/components/shopComponent'
import CheckoutComponent from './funcionalities/checkout/components/main/checkoutComponent'
import { main } from './funcionalities/initializer/main/main.js'


/*** IMPORTS STYLES CSS ***/
import './_assets/styles/main.css'
import './_assets/styles/bootstrap.css'
import "slick-carousel/slick/slick.css"
import './_assets/styles/linearicons.css'
import './_assets/styles/themify-icons.css'
import './_assets/styles/mainPersonality.css'
import "slick-carousel/slick/slick-theme.css"
import './_assets/styles/font-awesome.min.css'

/*** IMPORT JAVASCRIPT ***/
import './_assets/Js/main.js'
import './_assets/Js/jquery.sticky.js'
import './_assets/Js/bootstrap.min.js'
import './_assets/Js/jquery-3.4.1.min.js'
import './_assets/Js/jquery.nice-select.min.js'

const store = createStore(Reducers, applyMiddleware(thunk))

//Função para inicializar as configurações de cada cliente que entra no sistema
main()


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch history={useHistory}>
                <Route path="/" exact component={App} />
                <Route path="/login" component={Login} />
                <Route path="/item/:categorie_product/:name_product/:id_product" exact component={ProductDetail} />
                <Route path="/register" exact component={NewUser} />
                <Route path="/cart" exact component={CartComponent} />
                <Route path="/recuperacao-de-senha" exact component={SubmitUrlComponent} />
                <Route path="/authentication/alterar-senha/hash/:hash" exact component={AlterPasswordComponent} />
                <Route path="/shop" exact component={ShopComponent} />
                <Route path="/pagamento" exact component={CheckoutComponent} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();

