import React, { useState } from "react";
import DialogBoxFile from "../DialogBoxFile/DialogBoxFile";
import DialogBoxHelp from "../DialogBoxHelp/DialogBoxHelp";
import DialogBoxEdit from "../DialogBoxEdit/DialogBoxEdit";

const TopIcons = () => {
  const [showFile, setShowFile] = useState(false);

  const handleClickFile = () => {
    setShowHelp(false);
    setShowEdit(false);
    setShowFile(!showFile);
  };

  const [showHelp, setShowHelp] = useState(false);

  const handleClickHelp = () => {
    setShowHelp(!showHelp);
    setShowEdit(false);
    setShowFile(false);
  };

  const [showEdit, setShowEdit] = useState(false);

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
    setShowHelp(false);
    setShowFile(false);
  };

  return (
    <div
      style={{
        color: "white",
        //backgroundColor: "black",
        height: "35px",
        display: "flex",
      }}
    >
      <img
        // src={
        //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonXt9NxcNDx6RraYgy2b-FAYNA_Rzm_0Ms6dAlGxsS219I24D88lILl_5gfO1bwCv7EY&usqp=CAU"
        // }
        src={
          "data:image/png;base64,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"
        }
        style={{
          width: "25px",
          marginLeft: "2%",
          marginTop: "3.25px",
          height: "24px",
        }}
      />

      <div
        style={{
          marginLeft: "5%",
          fontWeight: "bold",
          display: "flex",
          color: "white",
        }}
      >
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleClickFile()}
        >
          F i l e
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleClickEdit()}
        >
          E d i t
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            fontWeight: "bold",
            border: "none",
            outline: "none",
            background: "none",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => handleClickHelp()}
        >
          H e l p
        </button>
      </div>
      <div
        style={{
          color: "white",
          marginLeft: "19%",
          marginTop: "8.5px",
          fontWeight: "bold",
        }}
      >
        A P P L E &nbsp;&nbsp;C L O U D&nbsp;&nbsp; O S &nbsp;&nbsp;P R O T O T
        Y P E
      </div>
      {showFile ? <DialogBoxFile /> : null}
      {showHelp ? <DialogBoxHelp /> : null}
      {showEdit ? <DialogBoxEdit /> : null}
    </div>
  );
};

export default TopIcons;
