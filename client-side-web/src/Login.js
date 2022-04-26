import { useRef, useState } from 'react';
import logo from './logo.png'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container" id="loginform">
            <div className="center">
                <form>
                    <img className="mb-4" src={logo} alt="logo" width="72" height="72"></img>
                    <h1 className="h3 mb-3 fw-normal">Welcome<br />Sign in</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingUsername" placeholder="Username"></input>
                        <label htmlFor="floatingUsername">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="w-100 btn btn-lg btn-primary btn-grad" type="submit">Sign in</button>
                            </div>
                            <div className="col">
                            <Link to="/register"><button className="w-100 btn btn-lg btn-primary btn-grad">Register</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;