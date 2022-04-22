import React, { Component } from 'react'
import { userLogin } from '../actions/api';
import Login from '../components/Login'
import swal from 'sweetalert';

export default class LoginPage extends Component {

    state = {}

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await userLogin(this.state);
            localStorage.setItem('token', JSON.stringify(res.data.accessToken));
            localStorage.setItem('user', JSON.stringify(res.data.userData));
            swal("Logged in successfully", { buttons: false, timer: 2000, icon: "success" })
            this.props.history.push("/faqlist");;
            window.location.reload();
        } catch (error) {
            console.log(error.response.data, 'data');
            if (error.response.data) {
                const message = error.response.data.Message;
                swal(`${message}`, { buttons: false, timer: 2000, icon: 'warning' })
            };
        };
    };

    render() {
        return (
            <div>
                <Login
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    state={this.state}

                />
            </div>
        )
    }
}
