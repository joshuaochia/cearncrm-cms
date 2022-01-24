import React, { useEffect } from "react";
import * as classes from "./Title.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Title = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="text-center mt-5 mb-5">
      <h1 className={` ${classes["features__content"]}`}>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Title;
