import React from "react";
import * as classes from "./Title.module.css";
const Title = (props) => {
  return (
    <div className="text-center mt-5 mb-5">
      <h1 className={` ${classes["features__content"]}`}>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Title;
