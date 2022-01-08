import React from "react";
import { FaClock } from "@react-icons/all-files/fa/FaClock";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaGift } from "@react-icons/all-files/fa/FaGift";
import { FaAppStore } from "@react-icons/all-files/fa/FaAppStore";
import Title from "./Title";
import * as classes from "./FourContent.module.css";

function FourContent() {
  return (
    <React.Fragment>
      <Title />
      <div className="container">
        <div className="row ">
          <div className="pt-5 col-md-6 col-12">
            <div class="d-flex flex-row">
              <div className="mt-3 content__icon">
                <FaClock size="3em" style={{ color: "#2545FB" }} />
              </div>
              <div className={`${classes["content__text"]} `}>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5 col-md-6 col-12">
            <div className="d-flex flex-row">
              <div className="mt-3 content__icon">
                <FaCheckCircle size="3em" style={{ color: "#2545FB" }} />
              </div>
              <div className={`${classes["content__text"]} `}>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5 col-md-6 col-12">
            <div className="d-flex flex-row">
              <div className="mt-3 content__icon">
                <FaGift size="3em" style={{ color: "#2545FB" }} />
              </div>
              <div className={`${classes["content__text"]} `}>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5 col-md-6 col-12">
            <div className="d-flex flex-row ">
              <div className="mt-3 content__icon">
                <FaAppStore size="3em" style={{ color: "#2545FB" }} />
              </div>
              <div className={`${classes["content__text"]} `}>
                <h5>Lorem Ipsum</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FourContent;
