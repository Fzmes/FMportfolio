import React from "react";
import AdressImg from "../../assets/images/Contactimg.png";

const ContactImg = ({ theme }) => {
  return (
    <img
      src={AdressImg}
      alt="contact Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default ContactImg;
