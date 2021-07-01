import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = function (e) {
        e.preventDefault();
        axios.post("http://localhost:3001/users/register", { email: input.email, password: input.password })
            .then(() => {
                history.push("/login");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="position-relative ">
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center m-sm-5 p-sm-5">
                    <div className="row mt-sm-5 bg-dark p-5 rounded-3 ">
                        <div className="row mb-3 justify-content-center">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" name="email" onChange={handleInputChange} value={input.email} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" name="password" onChange={handleInputChange} value={input.password} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Register</button>
                        <p className="d-flex justify-content-end" >Do you already have an account?<Link to="/login" >Login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Register;