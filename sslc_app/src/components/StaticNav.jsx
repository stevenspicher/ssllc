import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo_llc.png";



const StaticNavigation = () => {

    useEffect(() => {
        document.body.classList.add("pages");

        // Clean up: Remove the "homePage" class from body when HomePage unmounts
        return () => {
            document.body.classList.remove("pages");
        };
    }, []);
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
        </>
    )
}

export default StaticNavigation;