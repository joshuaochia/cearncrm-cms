import classes from "./Layout.module.css";
import React from "react";
import FullNavbar from "./Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Announcement />

      <FullNavbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
