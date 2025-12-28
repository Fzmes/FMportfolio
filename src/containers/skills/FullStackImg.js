import React, { Component } from "react";
import fullstckimg from "../../assets/images/fullstack.png";

const FullStackImg = ({ theme }) => {
  return (
    <img
      src={fullstckimg}
      alt="fullstack Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default FullStackImg;
