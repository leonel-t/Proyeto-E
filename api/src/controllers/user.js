const { User } = require('../db.js');


module.exports = {
    findAllUser() {
        return User.findAll()
    }
};
