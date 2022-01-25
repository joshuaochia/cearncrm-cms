import React from "react";
import * as classes from "./Navbar.module.css";
import logo from "../../images/lyne.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link } from "gatsby";

const FullNavbar = () => {
  return (
    <Navbar bg="white" className="container" expand="lg">
      <Link to="/" className="navbar-brand" href="#">
        <img
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse
        className="collapse navbar-collapse"
        id="navbarTogglerDemo02"
      >
        <Nav
          className={`${classes["nav__content"]} navbar-nav mr-auto mt-2 mt-lg-0 `}
        >
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
        </Nav>

        <Nav
          className={`${classes["nav__content"]} navbar-nav ms-auto mt-2 mt-lg-0 `}
        >
          <li id={classes.login} className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li id={classes.signup} className="primary-1 nav-item">
            <a className="nav-link" href="#">
              SignUp {<FaArrowRight size={"0.8em"} />}
            </a>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FullNavbar;
