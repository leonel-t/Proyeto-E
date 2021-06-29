const axios = require("axios");


module.exports = {
    getAllPhotos(){
        return axios.get("https://jsonplaceholder.typicode.com/photos")
    }
}