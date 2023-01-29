// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import { drawRect } from "./Utilities";

function Obj() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Load facemesh
  // const runFacemesh = async () => {
  //   const netFace = await facemesh.load({
  //     inputResolution: { width: 640, height: 480 },
  //     scale: 0.8,
  //   });
  //   setInterval(() => {
  //     detectFace(netFace);
  //   }, 1);
  // };

  // Main function
  const runCoco = async () => {
    // Facemesh
    // const netFace = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });

    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  // Detect function
  const detect = async (net, netFace) => {
    // Check data is available
    if (
      webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);
      const obj = await net.detect(video);
      console.log(obj);
      // ---- FACE
      // const face = await netFace.estimateFaces(video);

      // console.log(face);

      // ----- FACE

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      drawRect(obj, ctx);
      // drawMesh(face, ctx);
    }
  };

  // Detect function
  // const detectFace = async (netFace) => {
  //   if (
  //     webcamRef.current !== "undefined" &&
  //     webcamRef.current !== null &&
  //     webcamRef.current.video.readyState === 4
  //   ) {
  //     // Get Video Properties
  //     const video = webcamRef.current.video;
  //     const videoWidth = webcamRef.current.video.videoWidth;
  //     const videoHeight = webcamRef.current.video.videoHeight;

  //     // Set Video width
  //     webcamRef.current.video.width = videoWidth;
  //     webcamRef.current.video.height = videoHeight;

  //     // Set canvas width
  //     canvasRef.current.width = videoWidth;
  //     canvasRef.current.height = videoHeight;

  //     // make detections
  //     const face = await netFace.estimateFaces(video);
  //     console.log(face);

  //     // Get canvas context for drawing
  //     const ctx = canvasRef.current.getContext("2d");
  //     drawMesh(face, ctx);
  //   }
  // };

  useEffect(() => {
    runCoco();
    //  runFacemesh();
  }, []);

  return (
    <>
    {
      window.innerWidth > 500 ?
    (<div className="display-small-screen">
    <div className="App">
      <Webcam
        ref={webcamRef}
        muted={true}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "40%",
          right: 0,
          top: "12.5%",
          textAlign: "center",
          zindex: 9,
          width: "70%",
          height: "70%",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "50%",
          marginRight: "auto",
          left: 0,
          right: 0,
          top: "10%",
          textAlign: "center",
          zindex: 8,
          width: "40%",
          height: "60%",
          
        }}
      />
    </div>
    </div>
  ):("")}
  </>
  );
}

export default Obj;
