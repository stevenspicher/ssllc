// Contact.jsx
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo_llc.png";
import StaticNavigation from "../components/StaticNav.jsx";
import  {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";
import {Button, Container} from "@mui/material";
import { TextField } from '@mui/material';
import {chatWindow} from "./DemoComponents/LLM.jsx";

const Contact = () => {

    useEffect_loadPagesCss(useEffect);
    useEffect(() => {
        // Add fadeIn class to all boxes when the component mounts
        Array.from(document.getElementsByClassName("contact_box")).forEach(box => box.classList.add("fadeIn"));
    }, [])

    return (
        <>
            <StaticNavigation/>

            <div className="contact_box" id="contact_box2">
                <form>
                    <TextField
                        label="Name"
                        type="text"
                        name="name"
                        margin="normal"
                        style={{backgroundColor: 'white', width: "80%", borderRadius: '5px'}}
                    />
                    <TextField
                        label="Company"
                        type="text"
                        name="company"
                        margin="normal"
                        style={{backgroundColor: 'white', width: "80%", borderRadius: '5px'}}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        margin="normal"
                        style={{backgroundColor: 'white', width: "80%", borderRadius: '5px'}}
                    />
                    <TextField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        margin="normal"
                        style={{backgroundColor: 'white', width: "80%", borderRadius: '5px'}}
                    />
                </form>
                <Button>Please Contact Me</Button>
            </div>
            <div className="contact_box" id="contact_box3">


            </div>
             <div className="contact_box" id="contact_box1">
            <div style={{height: "100%"}}>
                <langflow-chat
                    window_title="Resume Q&A"
                    flow_id="75b8e95d-0637-4dcd-9ec1-433e4237660e"
                    host_url="http://100.120.48.74:7860"
                    width={"1000"}
                    height={"600"}
                    chat_position={"bottom-right"}
                    online_message={"LLM online"}
                    placeholder={"Ask questions about Steven's experience"}
                ></langflow-chat>
            </div>
        </div>

        </>
    )
}

export default Contact