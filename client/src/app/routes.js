import React from "react";
import { Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from "./pages/AuthPage";
import {RegisterPage} from "./pages/RegisterPage";
import { TodoPage} from "./pages/TodoPage";

export const useRoutes = isAuthemtificated => {
    if (isAuthemtificated) {
        return (
            <Switch>
                <Route path='Auth' exact>
                    <AuthPage />
                </Route>
                <Route path='/Register' exact>
                    <RegisterPage />
                </Route>
                <Route path='/Todo' exact>
                    <TodoPage />
                </Route>
                <Redirect to="/Auth"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}