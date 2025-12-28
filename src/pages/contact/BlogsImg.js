import React from "react";
import BlogsImg from "../../assets/images/blogs_image.png";

const Blogs = ({ theme }) => {
  return (
    <img
      src={BlogsImg}
      alt="BlogsImg Illustration"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        display: "block",
      }}
    />
  );
};

export default Blogs;
