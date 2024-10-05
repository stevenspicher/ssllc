import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./assets/logo_llc.png";


const Mission = () => {

    useEffect(() => {
        // Assume we have an array of refs to our boxes
        const boxes = Array.from(document.querySelectorAll('.box'));

        // Add 'fade-in' class to each box over 500ms interval
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('fade-in');
            }, index * 5000);
        });
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
            <div className="box" id="box-1">natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <div className="box" id="box-2">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</div>
            <div className="box" id="box-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className="box" id="box-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            <div className="box" id="box-5">dolore eu fugiat nulla pariatur.</div>
        </>
    )
}

export default Mission;