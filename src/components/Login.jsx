import React from 'react';
import { Link } from 'react-router-dom';
import "../css/login.css";


const Login = ({ handleSubmit, handleChange, ...props }) => {
    return (
        <div className='loginContainer'>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate autoComplete='off' >
                <div className='col-md-12'>
                    <h3 >Login</h3>
                    <div className='row'>
                        <div className="col-md-12">
                            <label htmlFor="userNameValidation" className="form-label">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name='userName'
                                value={props.userName}
                                id="userNameValidation"
                                required
                                onChange={handleChange}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="passwordValidation" classpassword="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                value={props.password}
                                id="nameValidation"
                                required
                                onChange={handleChange}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                    <div className='login-links'>
                        <span >Don't have an account? <Link to={{ pathname: "/" }}>Register</Link></span>
                        <Link to="/forgotpassword">Forgot Password</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login