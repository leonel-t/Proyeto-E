import React from "react";

const Post = ({ title, text }) => {
    return (
        <div>
            <div className="card text-white bg-dark mx-2 mx-sm-5 my-2 w-auto">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}
export default Post;