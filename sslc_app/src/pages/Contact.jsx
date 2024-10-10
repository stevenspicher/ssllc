// Contact.jsx
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo_llc.png";
import StaticNavigation from "../components/StaticNav.jsx";
import  {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";


const Contact = () => {

    useEffect_loadPagesCss(useEffect);
    useEffect(() => {
        // Add fadeIn class to all boxes when the component mounts
        Array.from(document.getElementsByClassName("contact_box")).forEach(box => box.classList.add("fadeIn"));
    }, [])

    return (
        <>
            <StaticNavigation/>
            <div className="contact_box" id="contact_box1" > input form for contact</div>
            <div className="contact_box" id="contact_box2" > about</div>
            <div className="contact_box" id="contact_box3" > more info</div>

        </>
    )
}

export default Contact