const axios = require("axios");


module.exports = {
    getAllPosts(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }
}