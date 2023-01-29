import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import Me from "../assets/Images/me.png"

import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import Obj from './ObjectDetection/Obj';
import "../App.css"

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -55%);
width: 65vw;
height:55vh;
display: flex;
background: linear-gradient(
    to right,
    #000 50%,
    #000 50%) bottom,
    linear-gradient(
    to right,
    #000 50%,
    #000 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    z-index:1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 25%;
    height: 25%;
}
`



const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: #000;
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: #000;
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`


const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi, I'm <br/>ADITYA</h1>
          <h6>aka AD</h6>
          <h6>I code simple yet beautiful web Apps</h6>
        </Text>
      </SubBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        {/* <img
          className="pic"
          src={Me}
          alt="Profile Pic"
          wdith="30%"
          height="100%"
        /> */}
        <Obj/>
      </motion.div>
    </Box>
  );
}

export default Intro