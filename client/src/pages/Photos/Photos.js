import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from './../../components/NavBar/NavBar';
import Photo from './../../components/Photo/Photo';

const Photos = () => {
    const limit = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    useEffect(async () => {
        const { data } = await axios.get(`http://localhost:3001/photos?page=${page}&limit=${limit}`);
        setData(data);
    }, [page]);

    return (
        <div>
            <NavBar />
            {data.length ? (
                <div>
                    <div className="container-fluid">
                        <div className="row row-cols-md-5">
                            {
                                data.data.map(photo => <Photo image={photo.url} text={photo.title} key={photo.id} />)
                            }
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-auto">
                                <button type="button" className={`btn btn-secondary ${page === 1 ? "disabled" : ""}`} onClick={()=>{setPage(page-1);setData([])}}>Previous</button>
                            </div>
                            <div className="col-sm-auto">
                                <p className="lead">{page} / {data.length/limit}</p>
                            </div>
                            <div className="col-sm-auto">
                                <button type="button" className={`btn btn-secondary ${page === data.length/limit ? "disabled" : ""}`} onClick={()=>{setPage(page+1);setData([])}}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
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
export default Photos;