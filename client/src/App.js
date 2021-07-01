import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/Home/Home.js"
import Login from "./pages/Login/Login.js"
import Photos from "./pages/Photos/Photos.js"
import Posts from "./pages/Posts/Posts.js"
import Register from "./pages/Register/Register.js";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/photos" component={Photos} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;