import React from "react";


import "./Parallax.css";

// import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

import "./About.css";


const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
    height:"100%",
    color: "black",
    backgroundColor:"black"
  },
  image: {
    width: "100%",
    height: "100%",
    marginLeft: "0%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  Typography: {
    fontSize: "1.95rem",
    textAlign: "center",
    color: "black",
  },
}));

const AboutPage = () => {
  return (
    <div class="display-small-screen">
      <div className="container1">
        <div className="box_page2">
          {/* <Paper
            className={classes.paper}
            style={{
              //   backgroundImage:
              //     "url(" + "https://wallpaperaccess.com/full/1500940.png" + ")",
              backgroundColor: "#fcf6f4",
              width: "100%",
              height: "100%",

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              backgroundSize: "50%",
            }}
          > */}
          {/* <Typography */}
          {/* //gutterBottom variant="subtitle1"
            > */}
          {/* <div
              style={{
                fontSize: "3.05rem",
                paddingTop: "5%",
                color: "black",
                marginLeft: "35.95%",
                display: "inline-block",
              }}
              gutterBottom
              variant="subtitle1"
            >
              I ' M &nbsp;&nbsp; A D I T Y A
            </div>
            <img
              className={classes.img}
              alt="complex"
              src={avatar}
              style={{ width: "450px", marginLeft: "33.75%" }}
            /> */}
          {/* </Typography> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className="display-small-screen">
                  <Grid item>
                    <ButtonBase className={classes.image}></ButtonBase>
                  </Grid>
                  <br />
                  <br />
                  {/* Typography */}
                  <div
                    className={classes.Typography}
                    variant="body2"
                    gutterBottom
                    style={{
                      color: "black",
                      marginLeft: "38.75%",
                      fontSize: "1.5rem",
                    }}
                  >
                    Full Stack MERN Developer
                  </div>

                  {/* <Typography */}
                  <div
                    className={classes.Typography}
                    style={{
                      marginLeft: "47%",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                    variant="body2"
                  >
                    B.Tech
                  </div>
                  {/* </Typography> */}
                </Grid>
                <Grid item className="display-small-screen">
                  {/* <Typography */}
                  <div
                    style={{
                      fontSize: "1.25rem",
                      paddingTop: "25px",
                      textAlign: "center",
                      color: "black",
                    }}
                    variant="body2"
                  >
                    Hardworking, Passionate, Great Thinker, Open-Minded, Great
                    Problem Solver, Optimistic, Nut-Picker ...
                  </div>
                  {/* </Typography> */}
                </Grid>

                <div
                  style={{
                    paddingTop: "3rem",
                    width: "75%",
                    marginLeft: "12.5%",
                  }}
                >
                  <h3 style={{ fontSize: "1.75rem", color: "black" }}>
                    My Skills
                  </h3>
                  <hr style={{ width: "100%", borderWidth: "2.5px" }}></hr>

                  <p
                    style={{
                      paddingTop: "3rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    React JS
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "95%",
                      }}
                    ></div>
                  </div>
                  <p
                    style={{
                      paddingTop: "1.75rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    Node JS
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "90%",
                      }}
                    ></div>
                  </div>
                  <p
                    style={{
                      paddingTop: "1.75rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    Web Design
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "85%",
                      }}
                    ></div>
                  </div>
                  <p
                    style={{
                      paddingTop: "1.75rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    Java
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "87%",
                      }}
                    ></div>
                  </div>

                  <p
                    style={{
                      paddingTop: "1.75rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    Data Structures & Algorithms
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "93%",
                      }}
                    ></div>
                  </div>
                  <p
                    style={{
                      paddingTop: "1.75rem",
                      color: "black",
                      fontSize: "0.95rem",
                    }}
                  >
                    JavaScript
                  </p>
                  <div style={{ backgroundColor: "black", width: "90%" }}>
                    <div
                      style={{
                        backgroundColor: "#EA158A",
                        height: "19px",
                        width: "90%",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: "5rem",
                    width: "75%",
                    marginLeft: "12.5%",
                  }}
                  className="display-small-screen"
                >
                  <h3 style={{ fontSize: "1.75rem", color: "black" }}>
                    Journey So Far
                  </h3>
                  <hr style={{ width: "100%", borderWidth: "2.5px" }}></hr>
                </div>

                <div
                  style={{
                    width: "75%",
                    marginLeft: "12.5%",
                    marginRight: "12.5%",
                    textAlign: "center",
                    paddingTop: "3rem",
                  }}
                  className="display-small-screen"
                >
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paper}
                        style={{ backgroundColor: "black" }}
                      >
                        <span style={{ fontSize: "1.75rem", color: "white" }}>
                          1+
                        </span>
                        <br />
                        <span style={{ fontSize: "1.25rem", color: "white" }}>
                          Partners{" "}
                        </span>
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paper}
                        style={{ backgroundColor: "black" }}
                      >
                        <span style={{ fontSize: "1.75rem", color: "white" }}>
                          5+
                        </span>
                        <br />
                        <span style={{ fontSize: "1.25rem", color: "white" }}>
                          Projects Done
                        </span>
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paper}
                        style={{ backgroundColor: "black" }}
                      >
                        <span style={{ fontSize: "1.75rem", color: "white" }}>
                          3+
                        </span>
                        <br />
                        <span style={{ fontSize: "1.25rem", color: "white" }}>
                          Happy Clients
                        </span>
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paper}
                        style={{ backgroundColor: "black" }}
                      >
                        <span style={{ fontSize: "1.75rem", color: "white" }}>
                          10+
                        </span>
                        <br />
                        <span style={{ fontSize: "1.25rem", color: "white" }}>
                          Meetings Done
                        </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>

                <div style={{ paddingTop: "2.35rem" }}>
                  <div
                    style={{
                      fontSize: "1em",
                      // width: "25.15%",
                      marginLeft: "11.87%",
                      borderRadius: "25px",
                    }}
                  >
                    <a
                      href="https://drive.google.com/drive/folders/1PGXqs_8dwq0GCQXuHcnxFgSfF23SRAm2"
                      target="_blank"
                      style={{
                        color: "black",
                        fontSize: "1.35rem",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Download Resume
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: "4.25rem",
                    width: "75%",
                    marginLeft: "12.5%",
                  }}
                >
                  <h3 style={{ fontSize: "1.75rem", color: "black" }}>
                    My Projects
                  </h3>
                  <hr style={{ width: "100%", borderWidth: "2.5px" }}></hr>
                </div>

                {/* 3D Slideshow Section   */}
                <section id="slideshow" style={{ paddingTop: "5rem" }}>
                  <div class="entire-content">
                    <div class="content-carrousel">
                      <figure class="shadow">
                        <img src="https://wersm.com/wp-content/uploads/2020/10/wersm-instagram-tenth-anniversary-logo-feat.jpg" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://www.businessinsider.in/thumb/msid-74487046,width-1200,height-900/whatsapp-dark-mode.jpg" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/a2b431c0460009f0e74c1337c6ec9201" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://olivias-blog.net/wp-content/uploads/2019/06/dirty-tinder.png" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://i.pinimg.com/736x/e7/ec/b8/e7ecb88f8aa92d1b9d1925558032a497.jpg" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://i.pinimg.com/originals/f2/1d/1e/f21d1e7deffb83c0ee38539277aac4c1.png" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://wallpaperaccess.com/full/1308159.jpg" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://images.ctfassets.net/h67z7i6sbjau/13mY9zeflhSx1FPWDDaHYJ/1e31b5799ff10c801eb6ab75a55e8c53/Brand_Guidelines-logo-example04-250x158-2x.jpg" />
                      </figure>
                      <figure class="shadow">
                        <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26" />
                      </figure>
                    </div>
                  </div>
                </section>
              </Grid>
            </Grid>
          </Grid>
          {/* </Paper> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
