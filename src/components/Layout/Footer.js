import * as classes from "./Footer.module.css";
import React from "react";
import logo from "../../images/lyne.png";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="container">
      <div className={`primary-2 ${classes["footer__cta"]}`}>
        <div className=" row">
          <div className="col-sm-6 ">
            <h1>Ready to start now?</h1>
          </div>
          <div className={`col-sm-6  ${classes["footer__cta__btn"]}`}>
            <button className={`secondary-1 `}>
              <a href="https://cearncreatives.com/">Schedule a meeting</a>
            </button>
          </div>
        </div>
      </div>
      <div className={`${classes["footer__content"]} mt-5 text-center`}>
        <div className="row">
          <div className="col-md-3 col-sm-12 footer_logo">
            <a href="#">
              <img
                src={logo}
                width="200"
                height="80"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-xs-12 footer_quicklinks">
            <h5 className="text-center">Quick Link</h5>
            <ul>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-xs-12 footer_contactinfo">
            <h5>Contact Info</h5>
            <ul>
              <li>atest@gmail.com</li>
              <li>+639123456789</li>
              <li>Philippines</li>
            </ul>
          </div>
          <div className="col-md-3 col-xs-12 footer_socialmedia">
            <h5>Social Media</h5>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
