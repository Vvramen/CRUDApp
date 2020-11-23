import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import SignUpPage  from './app/SignUpPage/SignUp';
import {LoginPage} from "./app/LoginPage/Login";
import TodoList from "./app/Containers/TodoList/TodoList";

class App extends React.Component {
  render() {
    const { history } = this.props
    return (
        <Switch>
          <Route path="/register" component={SignUpPage} />
          <Route history={history} path='/signup' component={SignUpPage} />
          <Route history={history} path='/login' component={LoginPage} />
          <Route history={history} path='/home' component={TodoList} />
          <Redirect from='/home' to='/home'/>
        </Switch>
    );
  }
}

export {App}