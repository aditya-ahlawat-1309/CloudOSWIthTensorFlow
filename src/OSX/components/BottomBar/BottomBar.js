import React , {useState}from 'react'
import BG from '../../TopBar/DialogBoxEdit/Edit/BG/BG';
import Icons from '../BottomIcons/Icons';



 const BottomBar2 = () => {

const [color,setColor] =useState("");


console.log(color);

  var sectionStyle = {
    // backgroundSize: "cover",
    // backgroundRepeat: "repeat-x",
    // backgroundImage: `url(${image})`,
    // objectFit: "contain",
    // backgroundColor:"#E11176",

    zIndex: 6,
    position: "absolute",
    //background: "rgba(0, 150, 225, 0.75)",
    // background: `${color}`,
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "5px solid rgba(0, 0, 0, 0)",
    position: "fixed",
    top: "94.95%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "60%",
    height: "125px",
    /* From https://css.glass */
    background: "rgba(0, 155, 255,1)",
    borderRadius: "16px",
    // boxShadow: "0 4px 30px rgba(255, 255, 255, 0.75)",
    // backdropFilter: "blur(5px)",
    // webkitBackdropFilter: "blur(5px)",
    // border: "1px solid rgba(255, 255, 255, 1)",
  };

  return (
    <div >
      <div
        style={{
          width: "50px",
          height: "50px",
        }}
      >
        <Icons />
      </div>

      <div class="bottombar-header" style={sectionStyle}></div>

<BG setColorData={setColor}/>

    </div>
  );
};

export default BottomBar2
