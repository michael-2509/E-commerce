import React from "react";

import classes from "./Input.module.css";

const Input = (Props) => {
  return (
    <>
      <article
        className={`${classes.input} ${
          Props.valueIsInvalid && classes.invalid
        }`}
      >
        <div className={classes.label}>
          <label>{Props.label}</label>
          {Props.valueIsInvalid && (
            <p className="errorText">{Props.errorText}</p>
          )}
        </div>

        <input
          type={Props.type}
          placeholder={Props.Placeholder}
          value={Props.value}
          onChange={Props.onChange}
          onBlur={Props.onBlur}
        />
      </article>
    </>
  );
};

export default Input;
