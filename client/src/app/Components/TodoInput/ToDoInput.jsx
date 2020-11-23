import React from 'react';
import {actions, initialState, todoSlice} from "../../Containers/TodoList/todoSlice";
import {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import axios from "axios";
import {getUser} from "../Actions/user.actions";

const mapDispatch = { addTodo: actions.addTodo }

const ToDoInput = ( props ) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if ( !value ) {
            return ;
        }}

        const user = localStorage.getItem('userId')
        props.addTodo(value)
        setTimeout(() => { return axios
            .post ('http://localhost:8000/users/' + user + '/todos', {
                title:value
            })}, 1000)
        setValue("")

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="Enter your task name here"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default connect(
    null,
    mapDispatch
)(ToDoInput)