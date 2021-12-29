import classes from "./Layout.module.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Announcement />
      <div className="container">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;