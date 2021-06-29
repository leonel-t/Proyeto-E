const server = require('express').Router();
const { getAllPhotos } = require("../controllers/photo.js")


server.get('/', (req, res, next) => {
    getAllPhotos()
        .then(photos => {
            res.send(photos.data)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});

module.exports = server;