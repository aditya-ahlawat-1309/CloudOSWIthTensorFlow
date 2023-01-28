import React,{useState} from 'react'

const DialogBox = () => {

const [zoom,setZoom] = useState(125);

const zoomInc = () => {
  setZoom(zoom+ 25);
}


const zoomDec = () => {
  setZoom(zoom - 25);
};

const refresh = () => {
  window.location.reload()
}

const zoomIn = () => {
  zoomInc();
  document.body.style.zoom = (zoom+"%");
}

const zoomOut = () => {
  zoomDec();
  document.body.style.zoom = (zoom+"%");
};

const restore = () => {
  document.body.style.zoom = "100%";
};

  return (
    <div
      style={{
        zIndex: 6,
        position: "absolute",
        background: "rgba(237, 235, 228, 0.9)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "5px solid rgba(0, 0, 0, 1)",
        position: "fixed",
        left: "14%",
        transform: "translate(-35%,25%)",
        width: "15%",
        height: "190px",
        color: "#000",
      }}
    >
      <button
        style={{
          color: "#000",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        N e w &nbsp;&nbsp;&nbsp;F i l e
        <br />
        &nbsp;&nbsp;(&nbsp;&nbsp;c o m i n g &nbsp;&nbsp;&nbsp;s o o
        n&nbsp;&nbsp;)
      </button>
      <br />
      <br />
      <button
        style={{
          color: "#000",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => zoomIn()}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;Z o o m &nbsp;&nbsp;&nbsp;i n
      </button>
      <br />
      <br />
      <button
        style={{
          color: "#000",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => zoomOut()}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;Z o o m &nbsp;&nbsp;&nbsp;o u t
      </button>
      <br />
      <br />
      <button
        style={{
          color: "#000",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => restore()}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;R e s t o r e &nbsp;&nbsp;&nbsp;S i z e
      </button>
      <br />
      <br />
      <button
        style={{
          color: "#000",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => refresh()}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;R e f r e s h
      </button>
    </div>
  );
}

export default DialogBox