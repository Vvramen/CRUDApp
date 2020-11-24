import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { Provider } from 'react-redux';
import store from './app/store'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()
//todo setup Provider here for use store from the './app/store'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

