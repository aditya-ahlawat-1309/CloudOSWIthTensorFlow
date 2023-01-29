import { useState } from "react";
import "./Icons.css"
import DialogBox from "../DialogBox/DialogBox";
import "../../../App.css"
const Icons = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show)
    return (
      <>
        {show ? <DialogBox /> : null}
        <div
          style={{
            // position: "absolute",
            //bottom: "1%",
            //left: "32.35%",
            zIndex: "11",
            display: "flex",
            color: "black",
            // alignItems:"center",
            // textAlign:"center",
            // justifyContent:"center",
            position: "fixed",
            top: "94.95%",
            left: "48%",
            transform: "translate(-50%,-50%)",
          }}
        >
         
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            href="https://ztmnasa.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  // "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/2560px-NASA_Worm_logo.svg.png"
                  "https://www.logolynx.com/images/logolynx/41/415e18953037c18c58aa1b2f1c28ee58.jpeg"
                }
                width="125px"
                height="60px"
                style={{
                  // borderRadius: "15px"
                  marginTop: "-15%",
                  borderRadius: "15px",
                }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}> &nbsp;&nbsp;&nbsp;NASA CRUD App</h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://todo-aditya.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://image.winudf.com/v2/image1/Y29tLnRhc2tzLmFuZHJvaWRfaWNvbl8xNjI4NzY4ODQ1XzA3MA/icon.png?w=&fakeurl=1"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px", marginTop: "-40%" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              Advanced <br /> Todo App
            </h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://dicegamedice.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://i.pinimg.com/564x/af/de/55/afde550fd6fa482cfae1440875c1f510.jpg"
                }
                width="60px"
                height="60px"
                style={{ marginTop: "-40%", borderRadius: "15px" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>&nbsp;&nbsp; Game</h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            //href="https://drummusic.netlify.app"
            onClick={() => handleClick()}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19677.png"
                }
                width="50px"
                style={{ marginTop: "-60%", backgroundSize: "contain" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              Systems <br /> App
            </h5>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://github.com/aditya-ahlawat-1309/Notepad"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://www.zdnet.de/wp-content/uploads/2013/05/java-800.jpg"
                }
                width="60px"
                height="60px"
                style={{ marginTop: "-40%", borderRadius: "15px" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              &nbsp;Notepad <br /> &nbsp;&nbsp; Clone
            </h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://paint0183.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://library.kissclipart.com/20180919/xqe/kissclipart-paint-windows-7-logo-clipart-microsoft-paint-compu-77dbca5213901db1.png"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px", marginTop: "-40%" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              MS Paint <br /> &nbsp;&nbsp; Clone
            </h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://chatfullstack.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                }
                width="60px"
                height="60px"
                style={{ marginTop: "-35%", borderRadius: "15px" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              What's App
              <br /> &nbsp;&nbsp; Clone
            </h5>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              //marginRight: "1.5%",
            }}
            href="https://twitter1309.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://i.pinimg.com/736x/ee/af/9c/eeaf9ce3ab22ecb3904daea1b2eab04a.jpg"
                }
                width="60px"
                height="60px"
                style={{ marginTop: "-40%", borderRadius: "15px" }}
                class="Icons-animation"
              />
            </div>
            <h5 style={{ color: "black" }}>
              &nbsp;&nbsp;Twitter <br /> &nbsp;&nbsp; Clone
            </h5>
          </a>
        </div>
      </>
    );
  }


export default Icons