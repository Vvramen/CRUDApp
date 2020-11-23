import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:4000/users/register', {
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:4000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            localStorage.setItem('userId', response.data.userId)

            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}