const server = require('express').Router();
const { findAllUser, addUser, loginUser } = require("../controllers/user.js");


server.get('/', (req, res, next) => {
    findAllUser()
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});

server.post('/register', (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send("email and password is required")
    }
    addUser({ email, password })
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});

server.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send("email and password is required")
    }
    loginUser({ email, password })
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});


module.exports = server;
