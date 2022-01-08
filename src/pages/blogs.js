import React from "react";
import Layout from "../components/Layout/Layout";
import AllBlog from "../components/Blog/AllBlog";
const BlogList = () => {
  return (
    <React.Fragment>
      <AllBlog />
    </React.Fragment>
  );
};
BlogList.Layout = Layout;
export default BlogList;
