import React from "react";
import * as classes from "./Testimonial.module.css";
import Title from "./Title";
import Profile1 from "../images/profile/profile-1.png";
import Profile2 from "../images/profile/profile-2.png";
import Profile3 from "../images/profile/profile-3.png";
import Profile4 from "../images/profile/profile-4.png";
import Profile5 from "../images/profile/profile-5.png";
import Profile6 from "../images/profile/profile-6.png";
import Profile7 from "../images/profile/profile-7.png";
import Profile8 from "../images/profile/profile-8.png";

const Testimonial = () => {
  return (
    <div className={classes["testimonial"]}>
      <div className={`container ${classes["testimonial__content"]}`}>
        <div
          className={`pt-5 row justify-content-around ${classes["circle__images"]}`}
        >
          <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile1}></img>
          </div>
          <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile2}></img>
          </div>
          <div className={`col-md-1  col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile3}></img>
          </div>
          <div className={`col-md-1  col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile4}></img>
          </div>
          <div className={`col-md-1  col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile5}></img>
          </div>
          <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile6}></img>
          </div>
          <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile7}></img>
          </div>
          <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
            <img width="60" height="60" src={Profile8}></img>
          </div>
        </div>
        <Title />
        <div className="col-md-12 col-12 justify-content-center text-center mb-5 pb-5">
          <p className={`${classes["client__testimonial"]}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1600s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
