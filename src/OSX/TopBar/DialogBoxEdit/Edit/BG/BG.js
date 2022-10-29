import React, {useState} from 'react'


const BG = (props) => {

    const [color,setColor] = useState("#0096ff");

// const functionHandler = (color) => {
// props.setColorData(color);
// }

  return (
    <div
      style={{
        zIndex: 6,
        position: "absolute",
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "5px solid rgba(0, 0, 0, 0)",
        position: "fixed",
        left: "100%",
        transform: "translate(20%,-10%)",
        width: "75px",
        height: "170px",
        color: "black",
      }}
    >
      <div style={{ marginLeft: "5px" }}>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
          onClick={() => {props.setColorData("red")}}
        >
          Red
        </button>
        <br />
        <br/>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
          onClick={() => {
            props.setColorData("#0096ff")
          }}
        >
          Blue
        </button>
        <br />
        <br/>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
          onClick={() => {
            props.setColorData("green")
          }}
        >
          Green
        </button>
        <br />
        <br/>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
          onClick={() => {
            props.setColorData("black")
          }}
        >
          Black
        </button>
        <br />
        <br/>
        <button
          style={{ cursor: "pointer", background: "none", border: "none" }}
          onClick={() => {
            props.setColorData("yellow")
          }}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default BG