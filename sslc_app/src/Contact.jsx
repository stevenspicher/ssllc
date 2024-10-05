// Contact.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./assets/logo_llc.png";

const Contact = () => {
    return (
        <>
            <NavLink to="/">
                <img src={logo} className="logo-static" alt="llc logo"/>
            </NavLink>
            <ul className="navigation-static">
                <li><NavLink activeClassName='active' to="/mission">Mission</NavLink></li>
                <li><NavLink activeClassName='active' to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink activeClassName='active' to="/contact">Contact</NavLink></li>
            </ul>
            <h1>This is the Contact page</h1>;
        </>
    )
}

export default Contact