import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
} from "react-router-dom";

import Login from "./components/authentication/loginComponent";
import ProductDetail from './components/products/pageDetails'
import NewUser from './views/authentication/registerNewUser/newUser'
import {Store} from './funcionalities/authentication/store';

/*** IMPORTS STYLES CSS ***/
import './_assets/styles/bootstrap.css'
import './_assets/styles/font-awesome.min.css'
import './_assets/styles/linearicons.css'
import './_assets/styles/themify-icons.css'
import './_assets/styles/main.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './_assets/styles/mainPersonality.css'

/*** IMPORT JAVASCRIPT ***/
import './_assets/Js/jquery-3.4.1.min.js'
import './_assets/Js/bootstrap.min.js'
import './_assets/Js/jquery.nice-select.min.js'
import './_assets/Js/jquery.sticky.js'
import './_assets/Js/main.js'

ReactDOM.render(

    <Provider store = {Store}>
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
