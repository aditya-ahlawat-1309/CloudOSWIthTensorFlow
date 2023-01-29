import React , {useState}from 'react'
import BG from '../../TopBar/DialogBoxEdit/Edit/BG/BG';
import Icons from '../BottomIcons/Icons';
import "../BottomIcons/Icons.css";
import DialogBox from "../DialogBox/DialogBox";


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
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "5px solid rgba(0, 0, 0, 1)",
    position: "fixed",
    top: "94%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "60%",
    height: "145px",
    /* From https://css.glass */
    background: "rgba(237, 235, 228, 1)",
    borderRadius: "16px",
    // boxShadow: "0 4px 30px rgba(255, 255, 255, 0.75)",
    // backdropFilter: "blur(5px)",
    // webkitBackdropFilter: "blur(5px)",
    // border: "1px solid rgba(255, 255, 255, 1)",
  };

  var sectionStyleSmallScreen = {
    zIndex: 6,
    position: "absolute",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "5px solid rgba(0, 0, 0, 1)",
    position: "fixed",
    top: "94%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "90%",
    height: "10%",
    background: "rgba(237, 235, 228, 1)",
    borderRadius: "16px",
  };

   const [show, setShow] = useState(false);

   const handleClick = () => setShow(!show);
  return (
    <div>
      <div className="display-small-screen">
        <div
          style={{
            width: "50px",
            height: "50px",
          }}
        >
          <Icons />
        </div>

        <div class="bottombar-header" style={sectionStyle}></div>

        <BG setColorData={setColor} />
      </div>
      <div class="display-bottom-bar-small-screen">
        <div class="bottombar-small-screen" style={sectionStyleSmallScreen}>
          <>
            {show ? (
              <div
                style={{
                  width: "95%",
                  height: "750%",
                  zIndex: "150",
                  backgroundColor: "rgba(237, 235, 228, 1)",
                  textAlign: "center",
                  border: "5px solid rgba(0, 0, 0, 1)",
                  position: "absolute",
                  top: "-425%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  display: "flex",
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
                      width="150px"
                      height="60px"
                      style={{
                        // borderRadius: "15px"
                        marginTop: "5%",
                        marginLeft: "10%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
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
                      style={{
                        marginTop: "10%",
                        marginLeft: "25%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
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
                      style={{
                        marginTop: "10%",
                        marginLeft: "20%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </a>
                <a href="https://quote0183.netlify.app/" target="_blank">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVY2MgZ8mCG5fNoOJRMHhrOSv_RCq3DknlrwzoYyM_XlJ-vJi5UoqYHNCxSqJninC5-1Q&usqp=CAU"
                    }
                    width="60px"
                    height="60px"
                    style={{
                      borderRadius: "15%",
                      marginLeft: "-85%",
                      marginTop: "25%",
                      position: "absolute",
                    }}
                  />
                  <br />
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
                        marginLeft: "-60%",
                        marginTop: "25%",
                        position: "absolute",
                      }}
                    />
                  </div>
                  <br />
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
                        marginLeft: "-37.5%",
                        marginTop: "25%",
                        position: "absolute",
                      }}
                    />
                  </div>
                  <br />
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
                      width="70px"
                      height="70px"
                      style={{
                        borderRadius: "15%",
                        marginLeft: "-15%",
                        marginTop: "23%",
                        position: "absolute",
                      }}
                    />
                  </div>
                  <br />
                </a>
                {/* https://github.com/aditya-ahlawat-1309/Notepad */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            ) : null}
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
                top: "70%",
                left: "48%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {/* <a
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
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              &nbsp;&nbsp;&nbsp;
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
                  />
                </div>
              </a>
              &nbsp;&nbsp;&nbsp;
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
                  />
                </div>
              </a>
              &nbsp;&nbsp;&nbsp;
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
                  />
                </div>
              </button>
              &nbsp;&nbsp;&nbsp;
              {/* <a
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
           
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
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
                  />
                </div>
              </a>
              &nbsp;&nbsp;&nbsp;
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
                  />
                </div>
              </a>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
           
          </a> */}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default BottomBar2