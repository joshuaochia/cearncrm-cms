import React from "react";
import BlogItem from "./BlogItem";
import Title from "../Title";
import image1 from "../../images/thumbnail/1.png";
import image2 from "../../images/thumbnail/2.png";
import image3 from "../../images/thumbnail/3.png";
import { data } from "jquery";
const AllBlog = ({ items, content }) => {
  const blogList = items.map(({ data, uid, id }) => (
    <BlogItem
      id={id}
      url={uid}
      sub_title={data.sub_title.text}
      title={data.title.text}
      img={data.thumbnail.url}
    />
  ));
  return (
    <div className="container">
      <Title title={content.title.text} description={content.sub_title.text} />
      {blogList}
    </div>
  );
};

export default AllBlog;
