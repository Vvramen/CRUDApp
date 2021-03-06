const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            console.log('LOOG', userData);
                            res.json({ status: user.email + '' + 'Registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email,
    })
        .then(user => {

            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        email: user.email,
                        todos: user.todos,
                    }
                    let userId = user._id
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: '15m'
                    })
                    let todos = user.todos
                    res.json({
                        token,
                        userId,
                        todos
                    })
                } else {
                    res.json({error: 'User does not exist'})
                }
            } else {
                res.json({error: 'User does not exist'})
            }
        })
})

module.exports = users