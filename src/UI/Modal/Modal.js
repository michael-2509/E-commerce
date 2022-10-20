import React from "react";

import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlay");

const Modal = (Props) => {
  const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = () => {
    return <div className={classes.modal}>{Props.children}</div>;
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{Props.chidren}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
