import React from "react";

const Modal = (Props) => {
  return (
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>{Props.children}</div>
      </div>
    </>
  );
};

export default Modal;
