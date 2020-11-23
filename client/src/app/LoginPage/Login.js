import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import { login } from '../Components/Actions/user.actions'
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push(`/home`)
            }
        })
    }

    render() {
        return (
            <form className="signupBlock" onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <hr/>
                <br/>
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
                <button className="loginButton" type="submit" to="/home">
                    Login
                </button>
                <br/>
                <Link to="/register" className="reg">Register</Link>
            </form>
        );
    }
}

export {LoginPage}