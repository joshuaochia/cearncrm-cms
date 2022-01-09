import React from "react";
import * as classes from "./Testimonial.module.css";
import { graphql } from "gatsby";
import Title from "../components/Title";
import TestimonialItem from "../components/TestimonialItem";

const Testimonial = ({ slice }) => {
  const { heading, sub_heading } = slice.primary;
  const personImgList = slice.items.map((item) => (
    <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
      <img width="60" height="60" src={item.persons.url}></img>
    </div>
  ));

  console.log(heading);

  return (
    <div className={classes["testimonial"]}>
      <div className={`container ${classes["testimonial__content"]}`}>
        <div
          className={`pt-5 row justify-content-around ${classes["circle__images"]}`}
        >
          {personImgList}
        </div>
        <Title description={sub_heading.text} title={heading.text} />
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
          <TestimonialItem></TestimonialItem>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

export const query = graphql`
  fragment HomepageDataBody1Testimonials on PrismicHomePageDataBody1Testimonials {
    id
    items {
      persons {
        url
      }
    }
    primary {
      heading {
        text
      }
      sub_heading {
        text
      }
    }
  }
`;
