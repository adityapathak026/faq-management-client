import React from 'react';
import "../css/register.css";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = ({ handleSubmit, handleChange, showPassword, handlePassword, ...props }) => {
    return (
        <div className='registerContainer'>
            <form className="needs-validation" noValidate autoComplete='off' >
                <div className='col-md-12'>
                    <h3 >Register</h3>
                    <div className='row'>
                        <div className="col-md-6">
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

                        <div className="col-md-6">
                            <label htmlFor="nameValidation" className="form-label"> Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                value={props.name}
                                id="nameValidation"
                                required
                                onChange={handleChange}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="emailValidation" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                value={props.email}
                                id="emailValidation"
                                required
                                onChange={handleChange}
                            />
                            <div className="valid-feedback">
                                Please choose a username.
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="passwordValidation" className="form-label">Password </label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                value={props.password}
                                id="passwordValidation"
                                required
                                onChange={handleChange}
                            />
                            <div className="valid-feedback">
                                Please choose a password.
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="cPasswordvalidation" className="form-label">confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                name='cpassword'
                                value={props.cpassword}
                                id="cPasswordvalidation"
                                required
                                onChange={handleChange}
                            />
                            {showPassword ? <FaEye className="faEye" onClick={handlePassword} /> :
                                <FaEyeSlash className="faEye" onClick={handlePassword} />
                            }
                        </div>
                    </div>

                    <div className='register-links'>
                        <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Register</button>
                        <span >Already have an account? <Link to={{ pathname: "/login" }}>Login</Link></span>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default Register;