const server = require('express').Router();
const { getAllPhotos } = require("../controllers/photo.js")


server.get('/', (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||10;
    getAllPhotos()
        .then(photos => {
            const response = {
                length: photos.data.length,
                data: photos.data.slice((limit*(page-1)),(limit*page))
            }
            res.send(response)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
});

module.exports = server;