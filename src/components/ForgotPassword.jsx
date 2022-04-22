import React from "react";
import "../css/forgotPassword.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const ForgotPassword = ({ handleChange, ...props }) => {
    const { ResetPassword, showPassword, handlePassword } = props;

    return (

        <section className="forgotpassContainer">
            <form className="forgotpassForm" >

                <h4 className="col-md-8 col-sm-12">VERIFY OTP & CREATE NEW PASSWORD</h4>

                <p className="col-md-8 col-sm-12 text-muted">Enter the email associated with your account ad we will send the Otp to reset the password</p>


                <div className="col-md-8 col-sm-12 form-group">
                    <input className="form-control"
                        type="text"
                        name="otpCode"
                        value={props.otpCode}
                        placeholder="OTP"
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-8 col-sm-12 form-group">
                    <input className="form-control"
                        name="password"
                        value={props.password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-8 col-sm-12 form-group">
                    <input className="form-control"
                        name="cpassword"
                        value={props.cpassword}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                    {showPassword ? <FaEye className="faEyeSlash" onClick={handlePassword} /> :
                        <FaEyeSlash className="faEyeSlash" onClick={handlePassword} />
                    }
                </div>

                <button
                    type="submit"
                    className="col-md-8 col-sm-12 btn btn-primary"
                    onClick={ResetPassword}
                >Verify & Reset Password</button>
            </form>

        </section>
    )
};

export default ForgotPassword;