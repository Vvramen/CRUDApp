import axios from 'axios'

export const register = async newUser => {
    await axios
        .post('http://localhost:8000/users/register', {
            email: newUser.email,
            password: newUser.password
        });
    console.log('Registered')
    ;
}

export const login = user => {
    return axios
        .post('http://localhost:8000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response)
            localStorage.setItem('usertoken', response.data.token)
            localStorage.setItem('userId', response.data.userId)

            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}