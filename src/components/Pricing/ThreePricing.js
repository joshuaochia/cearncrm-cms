import React, { useEffect } from "react";
import Title from "../Title";
import * as classes from "./ThreePricing.module.css";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import Aos from "aos";
import "aos/dist/aos.css";

const ThreePricing = ({ title, description, items }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const allPricing = items.map((item) => (
    <div className={`col-md-3 mb-5 mt-5`}>
      <div className={`text-center pb-5 ${classes["pricing__item"]}`}>
        <div className="mt-4 title">
          <h5>{item.title.text}</h5>
          <p>{item.cost.text}/mo</p>
        </div>
        <div className={`${classes.content} mt-3 mb-3`}>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_1.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_2.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_3.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_4.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_5.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_6.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_7.text}
          </p>
          <p className="pt-2">
            <span>
              <FaCheckCircle style={{ color: "#2543FB" }} />
            </span>
            {item.feature_8.text}
          </p>
        </div>
        <button>Get Now</button>
      </div>
    </div>
  ));
  return (
    <div>
      <Title title={title.text} description={description.text} />
      <div data-aos="fade-up" className="container">
        <div className="pricings ">
          <div class="row justify-content-center">{allPricing}</div>
        </div>
      </div>
    </div>
  );
};

export default ThreePricing;
