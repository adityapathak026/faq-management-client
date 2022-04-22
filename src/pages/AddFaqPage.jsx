import React, { Component } from 'react';
import { createFaq } from '../actions/api';
import AddFaq from '../components/AddFaq';
import swal from 'sweetalert';
import { v4 as uuid } from 'uuid';

class AddFaqPage extends Component {

    unique_id = uuid();

    state = { categories: { catId: this.unique_id } }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createFaq(this.state);
            console.log(res.data, 'ressssssss');
            swal("FAQ added successfully", { buttons: false, timer: 2000, icon: "success" });
            this.setState({ state: this.state })
            this.props.history.push("/faqlist");
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
                <AddFaq
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    unique_id={this.unique_id}
                    {...this.state}
                    {...this.props}
                />
            </div>
        );
    }
}

export default AddFaqPage;