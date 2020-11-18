import React from 'react';
import './App.css';
import TodoList from "./app/Containers/TodoList/TodoList";
import ToDoInput from "./app/Components/TodoInput/ToDoInput";
import {useRoutes} from "./app/routes";
import {BrowserRouter as Router} from "react-router-dom";
import {UseAuth} from './app/hooks/auth.hook'
import {AuthContext} from "./app/context/AuthContext";
import {Navbar} from "./app/Components/navbar";


function App() {
  const  {token, login, logout,userId} = UseAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
      <AuthContext.Provider value={{
      token, login,logout, userId, isAuthenticated}}>
        <Router>
          {isAuthenticated && <Navbar/>}
          <div className="App">
            <header className="App-header">
            {/*todo place your todo header here */}
              Your todo list
            </header>
            <section>
              <TodoList/>
            </section>
          </div>
        </Router>
      </AuthContext.Provider>
  );
}

export default App