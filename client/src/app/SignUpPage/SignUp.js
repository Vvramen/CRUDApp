import React from 'react';
import './SignUp.css';
import axios from "axios";
import { register } from '../Components/Actions/user.actions'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            users: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
        }

        console.log('LOOG', newUser);
        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="Signup">

                <section>
                    <form className="signupBlock" onSubmit={this.onSubmit}>
                        <header className="App-header">
                            Create new acc
                        </header>
                        <p className="signupComponentText">Email</p>
                        <input
                            type="text"
                            placeholder="Enter your email here"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <p className="signupComponentText">Password</p>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <br/>
                        <button className="signupButton" type="submit">Sign Up</button>
                    </form>
                </section>
            </div>
        )
    }
}
