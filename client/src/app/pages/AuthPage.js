import React, {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHttp} from "../hooks/hook";
import {useMassage} from "../hooks/masssage.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        window.M.updateTextFields()
    }, [error])

    const changeHandler = Event => {
        setForm({...form, [event.target.name]: event.target.value })
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            consloe.log('Data', data)
        }catch (e) {}
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }catch (e) {}

return (
    <div className="row">
        <div className="col s6 offset-s3">
            <h1>ToDoList</h1>
            <div className="card grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                    <div>

                        <div className="input-field">
                            <input
                                placeholder="Введите email"
                                id="email"
                                type="text"
                                name="email"
                                className="yellow-input"
                                value={form.email}
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input
                                placeholder="Введите пароль"
                                id="password"
                                type="password"
                                name="password"
                                className="yellow-input"
                                value={form.password}
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Пароль</label>
                        </div>

                    </div>
                </div>
                <div className="card-action">
                    <button
                        className="btn yellow darken-4"
                        style={{marginRight: 10}}
                        disabled={loading}
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                    <button
                        className="btn grey lighten-1 black-text"
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    </div>
)}}