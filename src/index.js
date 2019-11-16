import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Login from "./components/authentication/loginComponent";
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
} from "react-router-dom";

ReactDOM.render(

    <Router>

        <Switch history={useHistory}>
            <Route path="/" exact component={App} />
            <Route path="/login" component={Login} />
        </Switch>

    </Router >,

    document.getElementById('root')
);

serviceWorker.unregister();
