import React from "react";
import BlogItem from "./BlogItem";
import Title from "../Title";
import image1 from "../../images/thumbnail/1.png";
import image2 from "../../images/thumbnail/2.png";
import image3 from "../../images/thumbnail/3.png";
const AllBlog = () => {
  return (
    <div className="container">
      <Title />
      <BlogItem img={image1} />
      <BlogItem img={image2} />
      <BlogItem img={image3} />
    </div>
  );
};

export default AllBlog;
