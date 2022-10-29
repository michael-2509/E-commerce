import React from "react";

import Classes from "./Input.module.css";

const Input = (Props) => {
  return (
    <>
      <article>
        <label>{Props.label}</label>
        <input placeholder={Props.Placeholder} type={Props.type} />
      </article>
    </>
  );
};

export default Input;
