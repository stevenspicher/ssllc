// Portfolio.js
import React, {useEffect, useState} from 'react';
import StaticNavigation from "../components/StaticNav.jsx";
import {useEffect_loadPagesCss} from "../lib/loadPagesCss.js";
import "../Styling/css/fadeIn.css";
import "../Styling/css/fadeOut.css";
import {chatWindow} from "./DemoComponents/LLM.jsx";


import abstract from "../assets/abstract.png"
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    FormControl, FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    Stack,
    Typography
} from "@mui/material";
// URL of the website you want to display in the iframe
const cloudOfficeSrc = "http://100.103.107.119/#/login";
const docUploadSrc = "http://100.110.73.121:5174/";




const Portfolio = () => {


    const [chatType, setChatType] = useState(undefined)
    const [chatOpen, setChatOpen] = useState(false)



    const handleChange = (event) => {
        setChatType(event.target.value)
    };


    const urlScrapeIntro = () => (
        <>
            <Typography style={{textAlign: 'center'}}>
                Provide current information on topics of your choosing. Select a wikipedia article and click the chat icon to discuss:
            </Typography>
            <FormControl>
                <Stack direction={"row"}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel value="rings" control={<Radio />} label="The Lord of the Rings" />
                    <FormControlLabel value="audi" control={<Radio />} label="Audi TT" />
                    <FormControlLabel value="poker" control={<Radio />} label="Poker" />
                </RadioGroup>
                </Stack>
            </FormControl>
        </>
    )



    useEffect(() => {
        // Add fadeIn class to all boxes when the component mounts
        Array.from(document.getElementsByClassName("portfolio_box")).forEach(box => box.classList.add("fadeIn"));
    }, [])
    useEffect_loadPagesCss(useEffect);


    return (
        <>
            <StaticNavigation/>


            <div className="portfolio_box" id="portfolio_box-2">
                <div style={{margin: "10px", height: "95%"}}>
                    <iframe src={cloudOfficeSrc}  style={{width: '100%', height: '100%'}}/>
                </div>

            </div>
            <div className="portfolio_box" id="portfolio_box-3">
                <div style={{margin: "10px", height: "95%"}}>
                    <iframe src={docUploadSrc} style={{width: '100%', height: '100%'}}/>
            </div>
            </div>
            <div className="portfolio_box" id="portfolio_box-1">
                <Stack>
                    <Box sx={{marginTop: "20px"}}>
                        {urlScrapeIntro()}
                        {chatWindow(chatType)}
                    </Box>


                </Stack>
                {/*<div style={{display: 'flex', flexDirection: 'column', height: '80%'}}>*/}
                {/*    /!*    {intro ? intro :*!/*/}

                {/*    /!*        <Typography style={{textAlign: 'left', margin: '30px'}}>*!/*/}
                {/*    /!*    Utilize the power of AI to provide information to customers and employees 24/7*!/*/}
                {/*    /!*</Typography>*!/*/}
                {/*    /!*    }*!/*/}

                {/*</div>*/}
            </div>


        </>
    );

}

export default Portfolio

