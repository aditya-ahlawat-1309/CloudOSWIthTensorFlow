import React, {useState} from 'react'
import BG from './Edit/BG/BG';

const DialogBox = () => {

const [showBG1,setShowBG1]  = useState(false);

const handleClick = () => {
  setShowBG1(!showBG1);
}

const [color,setColor] = useState("#0096ff");

  return (
    <div
      style={{
        zIndex: 6,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.8)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "5px solid rgba(0, 0, 0, 0)",
        position: "fixed",
        left: "14%",
        transform: "translate(-35%,40%)",
        width: "15%",
        height: "100px",
        color: "white",
        boxShadow: "10px 4px 30px #0000",
      }}
    >
      <div style={{ marginTop: "10px", marginLeft: "15px" }}>
        {/* <button style={{background:"none", border:"none",cursor:"pointer"}}
onClick = {() => handleClick()}
>
Edit background
</button> */}
        Work in Progress
      </div>

      {/* {showBG1 ? <BG/> : null} */}
    </div>
  );
}

export default DialogBox