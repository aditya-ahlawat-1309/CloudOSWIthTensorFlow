import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion";
import { NavLink, useHistory } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { PowerBtn, YinYang } from './AllSvgs'
import Intro from './Intro'
import BottomBar2 from '../OSX/components/BottomBar/BottomBar';
import AboutPage from './AboutPage';
import { Bar } from '../OSX/TopBar/TopBar/Bar';

import { BGContext } from '../Context';

const MainContainer = styled.div`
background: ${props => props.theme.text};
width:100vw;
height:100vh;
overflow: hidden;
position : relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla',sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color:black;
position:absolute;
top:3.5rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:1;
cursor:pointer;

`



const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position:absolute;
top: ${props => props.click ? '85%': '50%'};
left: ${props => props.click ? '92%' : '50%'};

transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display:flex;
flex-direction:column;
justify-content: center;
align-items:center;

transition: all 1s ease;

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
padding-top: 1rem;
}
`



const Main = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(click);

    const [clickLogo, setClickLogo] = useState(true);

    const handleClickLogo = () => setClickLogo(!clickLogo);

  return (
    <>
      <div className="mobile-message">
        <h2>Please use application on larger screen</h2>
      </div>
      <img
        src="https://wallpaperaccess.com/full/1567685.jpg"
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
      />
      
      <Bar />
      <MainContainer>
       

        <Container>


          <LogoComponent theme={click ? "light" : "dark"} />
          <SocialIcons theme={click ? "light" : "dark"} />

          <Center click={click}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
            <h2>Click on Logo</h2>
          </Center>

       

          <Contact
            target="_blank"
            to={{ pathname: "mailto:ad.aditya.1309@gmail.com" }}
          >
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi..
            </motion.h2>
          </Contact>

        </Container>
        {click ? <Intro /> : null}
        <BottomBar2 />
      </MainContainer>

      <AboutPage />
   
    </>
  );
}

export default Main