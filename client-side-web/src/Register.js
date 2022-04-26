import { Link } from 'react-router-dom';
import logo from './logo.png'
import InputImage from './InputImage.js'
import './Register.css'

function Register() {
    return (
        <div className="container" id="registerform">
            <div className="center2">
                <form>
                    <img className="mb-4" src={logo} alt="logo" width="72" height="72"></img>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingUsername2" placeholder="Username"></input>
                        <label htmlFor="floatingUsername2">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Password"></input>
                        <label htmlFor="floatingPassword2">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingVerifyPassword" placeholder="Verify Password"></input>
                        <label htmlFor="floatingVerifyPassword">Verify Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingNickname" placeholder="Nickname"></input>
                        <label htmlFor="floatingNickname">Nickname</label>
                    </div>
                    <InputImage/>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <Link to="/"><button className="w-100 btn btn-lg btn-primary btn-grad">Back to sign in</button></Link>
                            </div>
                            <div className="col">
                                <button className="w-100 btn btn-lg btn-primary btn-grad" type="submit">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;