import * as classes from "./Footer.module.css";
import React from "react";
import logo from "../../images/lyne.png";

const Footer = () => {
  return (
    <footer>
      <div className={`primary-2 ${classes["footer__cta"]}`}>
        <div className=" row">
          <div class="col justify-content-start">
            <h1>Ready to start now?</h1>
          </div>
          <div class="col d-flex justify-content-end">
            <a className={`secondary-1 ${classes["footer__cta__btn"]}`}>
              Schedule a meeting
            </a>
          </div>
        </div>
      </div>
      <div className="footer__content text-center">
        <div className="footer_logo">
          <a href="#">
            <img
              src={logo}
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
        </div>

        <div className="footer_quicklinks">
          <h6>Quick Link</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer_contactinfo">
          <h6>Contact Info</h6>
          <ul>
            <li>test@gmail.com</li>
            <li>+639123456789</li>
            <li>Philippines</li>
          </ul>
        </div>
        <div className="footer_socialmedia">
          <h6>Social Media</h6>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
