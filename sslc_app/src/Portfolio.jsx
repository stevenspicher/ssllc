// Portfolio.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./assets/logo_llc.png";

const Portfolio = () => {
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
            <h1>This is the Portfolio page</h1>;
        </>
    )
}

export default Portfolio

