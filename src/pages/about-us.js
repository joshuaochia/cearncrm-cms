import * as React from "react";
import Layout from "../components/Layout/Layout";
import LatestBlogs from "../components/Blog/LatestBlogs";

import FourContent from "../components/FourContent";
// markup
const AboutUs = () => {
  return (
    <React.Fragment>
      <FourContent />
      <LatestBlogs />
    </React.Fragment>
  );
};

AboutUs.Layout = Layout;
export default AboutUs;
