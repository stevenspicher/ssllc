// Portfolio.js
import React, {useEffect} from 'react';
import StaticNavigation from "../components/StaticNav.jsx";
import {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";
import "../css/fadeIn.css";
import "../css/fadeOut.css";
import abstract from "../assets/abstract.png"
// URL of the website you want to display in the iframe
const iframeSrc = "https://education-dashboard-fcc59.firebaseapp.com/home";
const Portfolio = () => {
    useEffect(() => {
        // Add fadeIn class to all boxes when the component mounts
        Array.from(document.getElementsByClassName("portfolio_box")).forEach(box => box.classList.add("fadeIn"));
    }, [])
    useEffect_loadPagesCss(useEffect);

    return (
        <>
            <StaticNavigation/>
            <div className="portfolio_box" id="portfolio_box-1">Title Analysis</div>
            <div className="portfolio_box" id="portfolio_box-2">
                Abstract Creation
                <img src={abstract} alt="Abstract Creation"
                     style={{width: '100%', height: '80%', objectFit: 'contain'}}/>
            </div>
            <div className="portfolio_box" id="portfolio_box-3">Education Dashboard
                <iframe src={iframeSrc} title="Education Dashboard" style={{width: '90%', height: '360px'}}/>
            </div>
            <div className="portfolio_box" id="portfolio_box-4">Cost Report Calculation</div>
            <div className="portfolio_box" id="portfolio_box-5">Dinner Theater Scheduling</div>


        </>
    )
}

export default Portfolio

