import React from "react";
import dataScienceImg from "../../assets/images/data_science3.png";

const DataScienceImg = ({ theme }) => {
  return (
    <img
      src={dataScienceImg}
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
