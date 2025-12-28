import React from "react";
import dataScienceImg from "../../assets/images/feelingProud1.png";

const FeelingProud = ({ theme }) => {
  return (
    <img
      src={dataScienceImg}
      alt="feel proud Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default FeelingProud;
