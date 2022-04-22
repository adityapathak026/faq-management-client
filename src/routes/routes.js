import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AddFaqPage from '../pages/AddFaqPage';
import FaqListPage from '../pages/FaqListPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const RoutesPage = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={RegisterPage} />

                <Route path="/login" exact component={LoginPage} />

                <Route path="/faqlist" exact component={FaqListPage} />

                <Route path="/forgotpassword" component={ForgotPasswordPage} />

                <Route path="/addfaq" component={AddFaqPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default RoutesPage;