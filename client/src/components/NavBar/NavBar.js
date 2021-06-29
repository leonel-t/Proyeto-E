import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WhatApp!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/photos">Photos</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-primary mx-1">Login</button>
                            <button className="btn btn-outline-success mx-1">Signup</button>
                            {/* <button className="btn btn-outline-danger mx-1">Logout</button> */}


                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;