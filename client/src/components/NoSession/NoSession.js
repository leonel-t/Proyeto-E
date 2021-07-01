import React from "react";
import { Link } from 'react-router-dom';

const NoSession = () => {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <Link to="/login" type="button" class="btn btn-success">Login</Link>
            <span> or </span>
            <Link to="/register" type="button" class="btn btn-primary">Register</Link>
        </div>
    );
}
export default NoSession;