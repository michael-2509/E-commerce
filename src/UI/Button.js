import React, { Fragment } from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  background-color: #d87d4a;
  color: white;
  cursor: pointer;
  font-weight: 700;
  padding: 1rem;

  background-color: #fbaf85;
`;

const Button = (Props) => {
  return (
    <Fragment>
      <ButtonUI>{Props.Children}</ButtonUI>
    </Fragment>
  );
};

export default Button;
