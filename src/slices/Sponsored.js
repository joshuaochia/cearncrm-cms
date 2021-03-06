import React, { useEffect } from "react";
import * as classes from "./Sponsored.module.css";
import { graphql } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsored = ({ slice }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (!slice.items) return null;
  const imageItems = slice.items.map((item) => (
    <div className="col-lg-2 col-sm-4 col-4">
      <img className="p-1 " height="40" src={item.sponsor_logo.url}></img>{" "}
    </div>
  ));

  return (
    <div
      data-aos="fade-up"
      className={`container mb-5 ${classes["sponsored__content"]}`}
    >
      <p className="text-center mt-2">{slice.primary.title1.text}</p>
      <div className={`row text-center ${classes["sponsored__img"]}`}>
        {imageItems}
      </div>
    </div>
  );
};

export const query = graphql`
  fragment HomepageDataBody1Sponsored on PrismicHomePageDataBody1Sponsored {
    id
    items {
      sponsor_logo {
        url
      }
    }
    primary {
      title1 {
        text
      }
    }
  }
`;

export default Sponsored;
