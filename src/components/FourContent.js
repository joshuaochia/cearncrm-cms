import React from "react";
import Title from "./Title";
import * as classes from "./FourContent.module.css";
import * as icons from "react-icons/fa";

function FourContent({ title, description, items }) {
  console.log(items);
  const allFourContent = items.map((item) => {
    const Icon = icons[item.content_icon.text];

    return (
      <div className="pt-5 col-md-6 col-12">
        <div className="d-flex flex-row ">
          <div className="mt-3 content__icon">
            <Icon size="3em" style={{ color: "#2545FB" }} />
          </div>
          <div className={`${classes["content__text"]} `}>
            <h5>{item.content_title.text}</h5>
            <p>{item.content_description.text}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <Title title={title.text} description={description.text} />
      <div className="container">
        <div className="row ">{allFourContent}</div>
      </div>
    </React.Fragment>
  );
}

export default FourContent;
