import React from 'react';
import "../css/navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <div className="prj_name">

                <Link to="/addfaq">  <h3>AddFAQ</h3></Link>

                <div className="navbar_links">
                    <Link to="/faqlist" >FAQ List</Link>
                    <Link to="/" >Register</Link>
                    <Link to="/login" >Login</Link>
                    <Link to="/login" onClick={() => localStorage.removeItem('token')} >Logout</Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar