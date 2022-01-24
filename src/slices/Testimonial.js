import React, { useEffect } from "react";
import * as classes from "./Testimonial.module.css";
import { graphql } from "gatsby";
import Title from "../components/Title";
import TestimonialItem from "../components/TestimonialItem";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = ({ slice }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (!slice.items) return null;
  const { heading, sub_heading } = slice.primary;
  const personImgList = slice.items.map((item) => (
    <div className={`col-md-1 col-3 ${classes["image__item"]}`}>
      <img width="60" height="60" src={item.persons.url}></img>
    </div>
  ));

  const testimonialList = slice.items
    .filter((item) => item.testimonial.text !== "")
    .map((item) => {
      return { testimonial: item.testimonial };
    });

  return (
    <div data-aos="fade-up" className={classes["testimonial"]}>
      <div className={`container ${classes["testimonial__content"]}`}>
        <div
          className={`pt-5 row justify-content-around ${classes["circle__images"]}`}
        >
          {personImgList}
        </div>
        <Title description={sub_heading.text} title={heading.text} />
        <div className="col-md-12 col-12 justify-content-center text-center mb-5 pb-5">
          <p className={`${classes["client__testimonial"]}`}></p>
          <TestimonialItem content={testimonialList} />
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
      testimonial {
        text
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
