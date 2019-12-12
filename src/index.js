import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux' 
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
} from "react-router-dom";

import App from './App';
import ProductDetail from './components/products/pageDetails'
import {Reducers} from './reducer'
import Login from "./components/authentication/loginComponent";
import NewUser from './views/authentication/registerNewUser/newUser' 

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



ReactDOM.render(

    <Provider store = {store}>
        <Router>

            <Switch history={useHistory}>
                <Route path="/" exact component={App} />
                <Route path="/login" component={Login} />
                <Route path="/details" component={ProductDetail} />
                <Route path="/register" component={NewUser} />
            </Switch>

        </Router >
    </Provider>,

    document.getElementById('root')
);

serviceWorker.unregister();
