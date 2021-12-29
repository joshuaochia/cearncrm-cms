import React from "react";
import * as classes from "./Navbar.module.css";
import logo from "../../images/lyne.png";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul
          className={`${classes["nav__content"]} navbar-nav mr-auto mt-2 mt-lg-0 `}
        >
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>

        <ul
          className={`${classes["nav__content"]} navbar-nav ms-auto mt-2 mt-lg-0 `}
        >
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li id={classes.signup} className="primary-1 nav-item">
            <a className="nav-link" href="#">
              SignUp {<FaArrowRight size={"0.8em"} />}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
