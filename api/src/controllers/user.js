const { User } = require('../db.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const { JWT_SECRET } = process.env;

module.exports = {
    findAllUser() {
        return User.findAll()
    },
    async addUser(user) {
        const exist = await User.findOne({
            where: {
                email: user.email
            }
        });
        if (exist) {
            return new Promise((res, rej) => {
                res('user exist')
            })
        }
        const hashedPW = await bcrypt.hash(user.password, 10);
        const newUser = {
            email: user.email,
            password: hashedPW
        }
        return await User.create(newUser).then(user => user);
    },
    async loginUser(user) {
        const exist = await User.findOne({
            where: {
                email: user.email,
            }
        });
        if (exist) {
            const match = await bcrypt.compare(user.password, exist.password);
            if (match) {
                const payload = {
                    id: exist.id,
                    email: exist.email
                }
                const expiresIn = `${1000 * 60 * 60 * 1}`;
                const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
                return new Promise((res, rej) => {
                    res(token)
                })
            }
        }
        return new Promise((res, rej) => {
            rej("invalid credentials")
        })
    }
};
