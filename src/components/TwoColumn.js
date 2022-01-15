import React from "react";
import * as classes from "./TwoColumn.module.css";
import { FaPlayCircle } from "@react-icons/all-files/fa/FaPlayCircle";

const TwoColumn = ({ subHeading, heroImg, heading }) => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className={`col-md-6 col-sm-12 ${classes["twocol__content"]}`}>
          <h1>{heading.text}</h1>
          <p>{subHeading.text}</p>
          <div
            className={`mt-5 d-flex justify-content-center justify-content-md-start ${classes["twocol__cta"]}`}
          >
            <button className="primary-1">
              <a>Free Trial</a>
            </button>
            <a>
              Learn Why{" "}
              <FaPlayCircle
                style={{ color: "linear-gradient(#fbab7e, #f7ce68)" }}
              />
            </a>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 mt-5 ${classes["twocol__image"]}`}>
          <img
            style={{ stroke: "url(#blue-gradient)" }}
            className="img-fluid"
            src={heroImg.url}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
