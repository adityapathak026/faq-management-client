import React, { Component } from 'react';
import '../css/faqListPage.css';
import { getFaq } from '../actions/api';
import Accordion from '../components/Accordion';
import swal from 'sweetalert';

class FaqListPage extends Component {

    state = {}

    componentDidMount() {
        this.getAllFaqs();
    };

    getAllFaqs = async () => {
        try {
            const res = await getFaq();
            this.setState({ faqList: res.data });
        } catch (error) {
            if (error.response.data) {
                const message = error.response.statusText;
                swal(`${message}`, { buttons: false, timer: 2000, icon: 'warning' })
            };
        };
    };

    render() {
        return (
            <React.Fragment>
                <section className='faqListPage'>
                    <h4>FAQ'S</h4>
                    {
                        this.state.faqList?.map((faq) => {
                            return <Accordion key={faq._id} {...faq}  {...this.state} {...this.props} />
                        })
                    }
                </section>
            </React.Fragment>
        );
    }
}

export default FaqListPage;