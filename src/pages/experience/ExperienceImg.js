import React from "react";
import expreienceImg from "../../assets/images/experience.png";

const DataScienceImg = ({ theme }) => {
  return (
    <img
      src={expreienceImg}
      alt="Data Science Illustration"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default DataScienceImg;
