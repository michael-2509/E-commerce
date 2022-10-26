import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    marginTop: "10rem",
  };

  return (
    <>
      <button onClick={() => navigate(-1)} style={buttonStyle}>
        Go Back
      </button>
    </>
  );
};

export default GoBack;
