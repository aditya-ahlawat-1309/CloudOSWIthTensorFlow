import React from 'react'

const DialogBox = () => {
  return (
    <div
      style={{
        zIndex: 10,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.9)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "5px solid rgba(0, 0, 0, 0)",
        position: "fixed",
        top: "10%",
        left: "10%",
        transform: "translate(0%,10%)",
        width: "80%",
        height: "550px",
        color: "white",
        textAlign: "inherit",
        fontSize: "20px",
      }}
    >
      <p style={{ fontSize: "20.5px", marginTop: "25px", marginLeft: "50px" }}>
        The cloud operating system is used for managing a cloud infrastructure.
        It hides the details of the cloud infrastructure from application
        programmers and helps to share the limited resources. It allows users to
        upload their files from any location in the cloud. This system also
        provides the facility of transferring the file from a single PC to large
        scale, distributed computer system.
        <br />
        <br />
        The Cloud OS designed to provide a configurable interface for developing
        and deploying massively scalable distributed applications on behalf of a
        large number of users, exploiting the seemingly inﬁnite CPU, storage,
        and bandwidth provided by the Cloud infrastructure.
        <br />
        <br />
        The Cloud operating system provides the extensive features of modern
        operating systems like Unix and it's successors. It also provides simple
        programming abstractions and strong isolation techniques between users
        and applications, we give importance to provide a much stronger level of
        integration with network resources.
      </p>
      <br />
      <br />
      <p style={{ fontSize: "15px", marginLeft: "25px" }}>
        Examples
        <br />
        <br />
        1. Glide Glide OS 4.0
        <br />
        is one of the cloud computing solutions provides 30GB of storage freely.
        But users want to have extra storage then they have to pay charges for
        it.
        <br />
        2. MyGoya
        <br />
        It is a free online cloud operating system on which our own personal
        desktop can also be accessed from any Internet PC in the world and can
        use services like email, chat, file sharing etc.
        <br />
        3.Amoeba
        <br />
        It is an advanced cloud OS on which users can log into the free account
        and use cloud computing applications like shutterborg, Ex-stream, Surf
        etc.
        <br />
        4. Kohive
        <br />
        It is an online desktop where users can easily collaborate with others.
        It is used by freelancers, business, students etc.
      </p>
    </div>
  );
}

export default DialogBox