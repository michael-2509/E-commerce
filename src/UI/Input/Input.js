import React from "react";

import Classes from "./Input.module.css";

const Input = (Props) => {
  return (
    <>
      <section>
        <label>{Props.label}</label>
        <br />
        <input />
      </section>
    </>
  );
};

export default Input;
