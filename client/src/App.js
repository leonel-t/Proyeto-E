import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/Home/Home.js"
import Login from "./pages/Login/Login.js"
import Photos from "./pages/Photos/Photos.js"
import Posts from "./pages/Posts/Posts.js"
import Register from "./pages/Register/Register.js";
import NavBar from './components/NavBar/NavBar';
import NoSession from './components/NoSession/NoSession';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/photos" component={Photos} />
            </Switch>
        </BrowserRouter>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {sessionStorage.Token ?
                <Component />
                :
                <NoSession />
            }
        </Route>
    )
}

export default App;