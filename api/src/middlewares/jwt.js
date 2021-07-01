const jwt = require("jsonwebtoken");
require('dotenv').config();
const { JWT_SECRET } = process.env;


const checkJWT = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const decoded = jwt.verify(authorization.split(' ')[1],JWT_SECRET);
        // const [usuario] = listaUsuarios.filter(u => u.id === decoded.id);
        // if (!usuario || !usuario.activo) {
        //     throw Error();
        // }
        // req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized token' });
    }
};
module.exports = checkJWT;