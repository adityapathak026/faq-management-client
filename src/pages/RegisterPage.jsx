import React, { Component } from 'react'
import { userRegistration } from '../actions/api';
import Register from '../components/Register'
import swal from 'sweetalert';


export default class RegisterPage extends Component {

    state = { showPassword: false }

    handlePassword = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword })
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { showPassword, ...formValues } = this.state;
        try {
            await userRegistration(formValues);
            swal('User registered successfully', { buttons: false, timer: 2000, icon: 'success' })
            this.props.history.push("/faqlist");
            window.location.reload();
        } catch (error) {
            if (error.response.data) {
                const message = error.response.data.Message;
                swal(`${message}`, { buttons: false, timer: 2000, icon: 'warning' })
            };
        };
    };

    render() {
        return (
            <div>
                <Register
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handlePassword={this.handlePassword}
                    {...this.state}
                    {...this.props}
                />
            </div>
        )
    }
}
