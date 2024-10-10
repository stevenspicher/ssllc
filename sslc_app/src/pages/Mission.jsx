import React, { useEffect } from 'react';
import StaticNavigation from "../components/StaticNav.jsx";
import {useEffect_loadMissionBoxes} from "../lib/loadMissionBoxes.js";
import {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";
import "../css/fadeIn.css"


const Mission = () => {
    useEffect(() => {
        Array.from(document.getElementsByClassName("contact_box")).forEach(box => box.classList.add("fadeIn"));
    }, [])
    useEffect_loadPagesCss(useEffect);

    return (
        <>
         <StaticNavigation/>
            <div className="box" id="box-1">natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <div className="box" id="box-2">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</div>
            <div className="box" id="box-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className="box" id="box-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            <div className="box" id="box-5">dolore eu fugiat nulla pariatur.</div>
            </>
    )
}

export default Mission;