const server = require('express').Router();
const { getAllPosts } = require("../controllers/post.js")


server.get('/', (req, res, next) => {
    getAllPosts()
        .then(posts => {
            res.send(posts.data)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});

module.exports = server;