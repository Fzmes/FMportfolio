import React from "react";
import cloudImg from "../../assets/images/cloud_infrastructure.png";

const CloudImg = ({ theme }) => {
  return (
    <img
      src={cloudImg}
      alt="cloudImg Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default CloudImg;
