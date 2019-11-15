import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./components/login/Login";
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    useLocation,
    Switch,
    Redirect
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
