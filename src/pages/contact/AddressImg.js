import React from "react";
import AdressImg from "../../assets/images/address_image.png";

const Adress = ({ theme }) => {
  return (
    <img
      src={AdressImg}
      alt="AdressImg Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default Adress;
