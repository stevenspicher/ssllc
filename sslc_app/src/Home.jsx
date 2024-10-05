import React from 'react';
import logo from './assets/logo_llc.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <ul className="navigation">
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <img src={logo} className="logo" alt="llc logo"/>
        </>
    )
}

export default Home