import React, { useEffect, useState } from "react";
import NavBar from './../../components/NavBar/NavBar';
import Post from './../../components/Post/Post';
import axios from 'axios';


const Posts = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const { data } = await axios.get("http://localhost:3001/posts",{headers:{authorization: `Bearer ${sessionStorage.Token || "0"}`}});
        setData(data);
    }, []);

    return (
        <div>
            <NavBar />
            {data.length ? (
                data.map(post => <Post title={post.title} text={post.body} key={post.id} />)
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Posts;