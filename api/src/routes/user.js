const server = require('express').Router();
const { findAllUser } = require("../controllers/user.js");


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

module.exports = server;
