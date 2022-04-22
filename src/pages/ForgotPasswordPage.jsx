import React, { Component } from 'react';
import Otp from '../components/Otp';
import swal from "sweetalert";
import { getOtp, resetPassword } from '../actions/api';

class ForgotPasswordPage extends Component {

    state = { showPassword: false, otpForm: true };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handlePassword = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword })
    };

    handleOtpSubmit = async (e) => {
        e.preventDefault();
        const { otpForm } = this.state;
        const { email } = this.state;
        try {
            if (!email) swal("Please enter your email", { buttons: false, timer: 2000, icon: "warning" })
            else {
                const res = await getOtp(email);
                this.setState({ otpForm: !otpForm, otpId: res.data.otpData._id })
                swal("Otp sent, Please check your email", { buttons: false, timer: 2000, icon: "success" })
            }
        } catch (error) {
            console.log(error.response, 'error')
            if (error.response.data) {
                const message = error.response.data.Message;
                swal(`${message}`, { buttons: false, timer: 2000, icon: 'warning' })
            };
        };
    };

    ResetPassword = async (e) => {
        e.preventDefault();
        const { showPassword, otpForm, ...data } = this.state;
        try {
            if (!data.otpCode || !data.password || !data.cpassword) {
                swal("Please fill all the required fields")
            } else {
                await resetPassword(data);
                swal("Password changed successfully", { buttons: false, timer: 2000, icon: "warning" });
                this.props.history.push("/login");
                window.location.reload();
            };
        } catch (error) {
            console.log(error.response, 'changepass')
            if (error.response.data) {
                const message = error.response.data.Message;
                swal(`${message}`, { buttons: false, timer: 2000, icon: 'warning' })
            };
        };
    };


    render() {
        return (
            <>

                <Otp
                    handleChange={this.handleChange}
                    handleOtpSubmit={this.handleOtpSubmit}
                    ResetPassword={this.ResetPassword}
                    handlePassword={this.handlePassword}
                    {...this.state}
                    {...this.props}
                />
            </>
        )
    }
};

export default ForgotPasswordPage;