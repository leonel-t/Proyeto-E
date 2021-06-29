const { Router } = require('express');

//Importamos los routers
const user = require('./user.js');
const post = require('./post.js');
const photo = require('./photo.js');

const router = Router();

// Configuramos los routers
router.use('/users', user);
router.use('/posts', post);
router.use('/photos', photo);


module.exports = router;
