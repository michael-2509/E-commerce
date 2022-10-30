import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "black",
    fontSize: "18px",
    marginTop: "10rem",
    marginLeft: "2rem",
  };

  return (
    <>
      <p onClick={() => navigate(-1)} style={buttonStyle}>
        Go Back
      </p>
    </>
  );
};

export default GoBack;
