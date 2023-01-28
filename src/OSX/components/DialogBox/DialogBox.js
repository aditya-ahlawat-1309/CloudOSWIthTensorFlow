import React from 'react'
import "./DialogBox.css"
const DialogBox = () => {
  return (
    <div class="dialog-container">
      <h1 style={{ color: "#000", textAlign: "center", marginTop: "3%" }}>
        S Y S T E M - A P P S
      </h1>
      <div>
        <a href="https://quote0183.netlify.app/" target="_blank">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVY2MgZ8mCG5fNoOJRMHhrOSv_RCq3DknlrwzoYyM_XlJ-vJi5UoqYHNCxSqJninC5-1Q&usqp=CAU"
            }
            width="100px"
            height="100px"
            style={{
              borderRadius: "15%",
              marginLeft: "-42.5%",
              marginTop: "5%",
              position: "absolute",
            }}
            class="Icons-animation"
          />
          <br />
          <h5
            style={{
              borderRadius: "15%",
              marginLeft: "-42.5%",
              marginTop: "13%",
              position: "absolute",
              color: "#000",
            }}
          >
            Random Quote <br />
            Generator
          </h5>
        </a>
        <a href="https://dynamicweatherapp.netlify.app" target="_blank">
          <div style={{ flexDirection: "column" }}>
            <img
              src={
                "https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
              }
              width="60px"
              height="60px"
              style={{
                borderRadius: "15%",
                marginLeft: "-30%",
                marginTop: "3.5%",
                position: "absolute",
              }}
              className="Icons-animation"
              width="100px"
              height="100px"
            />
          </div>
          <br />
          <h5
            style={{
              borderRadius: "15%",
              marginLeft: "-29%",
              marginTop: "12%",
              position: "absolute",
              color: "#000",
            }}
          >
            Weather App <br />
          </h5>
        </a>
        <a href="https://drummusic.netlify.app" target="_blank">
          <div style={{ flexDirection: "column" }}>
            <img
              src={
                "https://i.pinimg.com/originals/67/f6/cb/67f6cb14f862297e3c145014cdd6b635.jpg"
              }
              width="60px"
              height="60px"
              style={{
                borderRadius: "15%",
                marginLeft: "-17.5%",
                marginTop: "2%",
                position: "absolute",
              }}
              class="Icons-animation"
              width="100px"
              height="100px"
            />
          </div>
          <br />
          <h5
            style={{
              borderRadius: "15%",
              marginLeft: "-16%",
              marginTop: "10.5%",
              position: "absolute",
              color: "#000",
            }}
          >
            Music App <br />
          </h5>
        </a>
        <a
          href="https://github.com/aditya-ahlawat-1309"
          target="_blank"
        >
          <div style={{ flexDirection: "column" }}>
            <img
              src={
                "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
              }
              width="60px"
              height="60px"
              style={{
                borderRadius: "15%",
                marginLeft: "-6%",
                marginTop: "0%",
                position: "absolute",
              }}
              class="Icons-animation"
              width="110px"
              height="110px"
            />
          </div>
          <br />
          <h5
            style={{
              borderRadius: "15%",
              marginLeft: "-4%",
              marginTop: "9%",
              position: "absolute",
              color: "#000",
            }}
          >
            Github Link
          </h5>
        </a>
        {/* https://github.com/aditya-ahlawat-1309/Notepad */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default DialogBox