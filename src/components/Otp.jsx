import React from "react";

import ForgotPassword from "./ForgotPassword";
import "../css/otp.css";

const Otp = ({ handleChange, handleOtpSubmit, ...props }) => {

    const otpForm = props.otpForm;

    return (

        <div className="otpContainer">

            {
                otpForm ?
                    <form onSubmit={handleOtpSubmit} className="otpForm" >

                        <h4 className="col-md-8 col-sm-12">RESET PASSWORD</h4>

                        <p className="col-md-8 col-sm-12 text-muted">Enter the email associated with your account and we will send the Otp to reset the password</p>

                        <div className="col-md-8 col-sm-12 form-group">
                            <input className="form-control"
                                type="email"
                                name="email"
                                value={props.email}
                                placeholder="Enter Your Email..."
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="col-md-8 col-sm-12 btn btn-primary"
                            onClick={handleOtpSubmit}
                        >Send Otp</button>
                    </form>

                    :
                    <ForgotPassword
                        handleChange={handleChange}
                        {...props}
                    />

            }


        </div>
    )
};

export default Otp;