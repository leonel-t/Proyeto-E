import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <Link to="/posts" type="button" className="btn btn-success">Posts</Link>
                <span> or </span>
                <Link to="/photos" type="button" className="btn btn-primary">Photos</Link>
            </div>
        </div>
    );
}
export default Home;