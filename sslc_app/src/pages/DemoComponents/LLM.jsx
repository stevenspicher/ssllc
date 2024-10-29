import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


const chatParams = {
    width: "1000",
    height: "550",
    url: "http://100.120.48.74:7860",
    position: "bottom-right",
    message: "LLM Online",
};

const flowIds = {
    rings: {
        id: "9e912309-e239-42f9-8e69-74ad8e343edf",
        title: "The Lord of the Rings",
        message: "Ask for a three sentence description of Frodo..."
    },
    audi: {
        id: "22871e7b-7c43-4913-a8ce-042213b13803",
        title: "Audi TT",
        message: "Ask what 'TT' stands for..."
    },

    poker: {
        id: "e54a0a6b-0da9-4b20-acc6-bead0b9dc8c6",
        title: "Poker Rules",
        message: "Ask what an inside-straight is..."
    },
    resume: {
        id: "e54a0a6b-0da9-4b20-acc6-bead0b9dc8c6",
        title: "Poker Rules",
        message: "Ask what an inside-straight is..."
    }
}

export const chatWindow = (chatType, open) => {
  console.log(chatType)
    return (
        chatType !== undefined ?
        <div style={{marginLeft: "10px", marginTop: "-45px"}}>
            <langflow-chat
                window_title={flowIds[chatType].title ?? "Select an article above"}
                flow_id={flowIds[chatType].id ?? ""}
                host_url={chatParams.url}
                width={chatParams.width}
                height={chatParams.height}
                chat_position={chatParams.position}
                online_message={flowIds[chatType].message}
                start_open={open}
            >
            </langflow-chat>
        </div>
                :
                <></>

    )
}
// export const AngryElf = () => (
//     <langflow-chat
//         window_title="Angry Elf"
//         flow_id="c5a968be-9d77-4df7-8db8-331a35e4a11c"
//         host_url={chatParams.url}
//         width={chatParams.width}
//         height={chatParams.height}
//         chat_position={chatParams.position}
//         online_message={chatParams.message}
//      >
//
//     </langflow-chat>
// )
// export const ResumeQA = () => (
//     <>
//         <Stack>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 In this example, ask things like:
//             </Typography>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 what jobs Steven has had?
//             </Typography>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 What projects he has worked on?
//             </Typography>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 Why should you hire Steven for your project?
//             </Typography>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 What software skills does he have?
//             </Typography>
//             <Typography style={{textAlign: 'left', margin: '10px'}}>
//                 Click the chat icon to begin.
//             </Typography>
//         </Stack>
//         <Box style={{textAlign: 'left', margin: '10px', zIndex: 9999}}>
//
//             <langflow-chat
//                 window_title="Resume Q&A"
//                 flow_id="75b8e95d-0637-4dcd-9ec1-433e4237660e"
//                 host_url="http://100.120.48.74:7860"
//                 width={"420"}
//                 height={"390"}
//                 chat_position={"bottom-right"}
//                 online_message={"LLM online"}
//                 placeholder={"Ask questions about Steven's experience"}
//             ></langflow-chat>
//         </Box>
//     </>
//
//
// )
//
//
//
// export const wikipedia = () => (
//     <>
//
//         <Box style={{textAlign: 'left', margin: '5px'}}>
//
//             <langflow-chat
//                 window_title="Lord of the Rings Wikipedia Article"
//                 flow_id="9e912309-e239-42f9-8e69-74ad8e343edf"
//                 host_url="http://100.120.48.74:7860"
//                 width={"420"}
//                 height={"390"}
//                 chat_position={"bottom-right"}
//                 chat_inputs='{"text":"file"}'
//                 online_message={"LLM online"}
//                 placeholder={"Ask for a plot summary..."}
//
//             ></langflow-chat>
//         </Box>
//
//     </>
// )
//
//
// export const rialto = () => (
//
//
//
//         <Box style={{textAlign: 'left', margin: '5px'}}>
//
//             <langflow-chat
//                 window_title="Rialto Headliners"
//                 flow_id="eb9ca3da-fec3-46fc-9870-619ca694cf9e"
//                 host_url="http://100.120.48.74:7860"
//                 width={"420"}
//                 height={"390"}
//                 chat_position={"bottom-right"}
//                 chat_inputs='{"text":"file"}'
//                 online_message={"LLM online"}
//                 placeholder={"Ask who's playing..."}
//
//             ></langflow-chat>
//         </Box>
//
// )
//
//
// export const weather = () => (
//         <Box style={{textAlign: 'left', margin: '5px'}}>
//             <langflow-chat
//                 window_title="Oil City News"
//                 flow_id="e633714e-8a83-4a2f-b5b6-006967faef20"
//                 host_url="http://100.120.48.74:7860"
//                 width={"420"}
//                 height={"390"}
//                 chat_position={"bottom-right"}
//                 chat_inputs='{"text":"file"}'
//                 online_message={"LLM online"}
//                 placeholder={"Ask for headlines..."}
//             ></langflow-chat>
//         </Box>
// )

{/*<Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*    Ask for more information about a specific news story.*/
}
{/*</Typography>*/
}
{/*<Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*    Tell me about the Rialto?*/
}
{/*</Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        Click the chat icon to begin.*/
}
{/*    </Typography>*/
}
{/*</Stack>*/
}

{/*// <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>*/
}
{/*// <>*/
}
{/*//     <Stack style={{flexGrow: 1}}>*/
}
{/*//         <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*//             In this example, you can ask things like:*/
}
{/*//         </Typography>*/
}
{/*//         <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*//             What are the news categories?*/
}
{/*//         </Typography>*/
}
{/*//         <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*//             Ask for headlines in a specific category?*/
}
{/*//         </Typography>*/
}


{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        In this example, you can ask things like:*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        What is playing in November?*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        What musical acts are playing?*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        What are ticket prices for [performer]?*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        Tell me about the Rialto?*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        Tell me more about a certain performer.*/
}
{/*    </Typography>*/
}
{/*    <Typography style={{textAlign: 'left', margin: '10px'}}>*/
}
{/*        Click the chat icon to begin.*/
}
{/*    </Typography>*/
}
{/*</Stack>*/
}


// <Stack>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         In this example, you can ask things like:
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         Who is Frodo Baggins?
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         Summarize the plot of Lord of the Rings?
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         When were the novels written?
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         What are the themes?
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         What adaptations have been made?.
//     </Typography>
//     <Typography style={{textAlign: 'left', margin: '10px'}}>
//         Click the chat icon to begin.
//     </Typography>
// </Stack>