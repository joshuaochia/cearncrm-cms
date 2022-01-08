import React from "react";
import Title from "../Title";
import * as classes from "./ThreePricing.module.css";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
const ThreePricing = () => {
  return (
    <div>
      <Title />
      <div className="container">
        <div className="pricings ">
          <div class="row justify-content-center">
            <div className={`col-md-3 mb-5 mt-5`}>
              <div className={`text-center pb-5 ${classes["pricing__item"]} `}>
                <div className="mt-4 title">
                  <h5>Free</h5>
                  <p>14 days trial</p>
                </div>
                <div className={`${classes.content} mt-3 mb-3`}>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                </div>
                <button>Get Now</button>
              </div>
            </div>
            <div className={`col-md-3 mb-5 `}>
              <div className={`text-center pb-5 ${classes["pricing__item"]}`}>
                <div className="mt-4 title">
                  <h5>Standard</h5>
                  <p>15$/mo</p>
                </div>
                <div className={`${classes.content} mt-3 mb-3`}>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                </div>
                <button>Get Now</button>
              </div>
            </div>
            <div className={`col-md-3 mb-5 mt-5`}>
              <div className={`text-center pb-5 ${classes["pricing__item"]}`}>
                <div className="mt-4 title">
                  <h5>Premium</h5>
                  <p>30$/mo</p>
                </div>
                <div className={`${classes.content} mt-3 mb-3`}>
                  {" "}
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                  <p>
                    <span>
                      <FaCheckCircle style={{ color: "#2543FB" }} />
                    </span>
                    Lorem Ipsum Lorem
                  </p>
                </div>
                <button>Get Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePricing;
