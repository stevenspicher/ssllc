import React, { useEffect } from 'react';
import StaticNavigation from "../components/StaticNav.jsx";
import {useEffect_loadMissionBoxes} from "../lib/loadMissionBoxes.js";
import {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";
import "../Styling/css/fadeIn.css"
import {Container, Typography} from "@mui/material";


const Mission = () => {
    useEffect(() => {
        Array.from(document.getElementsByClassName("box")).forEach(box => box.classList.add("fadeIn"));
    }, [])
    useEffect_loadPagesCss(useEffect);
    // useEffect_loadMissionBoxes(useEffect);
    return (
        <>
         <StaticNavigation/>
            <div className="box" id="box-1">
                <Typography>
                    "content creation revolution" gives small businesses access to big business tools
                </Typography>
                </div>
            <div className="box" id="box-2">

                    <Typography>

                    can build Cloud-based or locally hosted tools :
                    </Typography>
                    <Typography>
                    Office solutions:
                    </Typography>
                    <Typography>

                    VPN
                    Messaging
                    calendar/scheduling
                    employee training learning Management systems
                    file share/store/access from any device
                    </Typography>
                    <Typography>
                        Custom front ends for cloud storage (Azure/AWS/Google Firebase) or locally hosted storage
                    Excel (or other format) data extraction/import
                    LLM (AI) analysis of documents/data
                    intelligent database creation
                    </Typography>
                    <Typography>
                    Report Generation:
                    Automated report generation and data display
                    charts, graphs, maps
                    realtime reporting (inventory, metrics)
                    </Typography>
                </div>
            <div className="box" id="box-3">
                <Typography>
                    and you no longer have to hire an in-house dev team to create them
                </Typography>
                <Typography>
                    just a lone captive developer on speed dial
                </Typography>
                </div>
            <div className="box" id="box-4">
                <Typography>...simple deployment options
                </Typography>
                <Typography>

                    ...inexpensive and flexible hosting and storage options
                </Typography>
                <Typography>

                    ...well developed web application building tools (ugh)
                </Typography>
                <Typography>

                    ...ai assisted development and ai implementation
                </Typography>

            </div>
            <div className="box" id="box-5">
                <Typography>
                    Your company deserves custom applications built around your processes
                </Typography>
                <Typography>
                    your company can be connected, consistent, and organized
                </Typography>
                <Typography>
                    your data can be current, accessible, and understood
                </Typography>
                <Typography>
                    your results can be quantified, analyzed, and presented
                </Typography>

            </div>
        </>
    )
}

export default Mission;