import React from "react";

const Photo = ({ image, text }) => {
    return (
        <div>
            <div className="card text-white bg-dark m-1 w-100" >
                <img src={image} className="card-img-top" alt="image" />
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}
export default Photo;