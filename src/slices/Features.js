import React, { useEffect } from "react";
import Title from "../components/Title";
import * as classes from "./Features.module.css";
import * as icons from "react-icons/fa";
import { graphql } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = ({ slice }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Primary Destructuring
  if (!slice.items) return null;
  const {
    feature_title: sectionTitle,
    feature_desciption: sectionDescription,
  } = slice.primary;

  // Slice Destructuring
  const items = slice.items;

  const ItemContent = items.map((item) => {
    const Icon = icons[item.icon.text];
    return (
      <div className="col-md-4 col-sm-6 pt-4">
        <div className={`card ${classes["card_content"]}`}>
          <div className="card-body">
            <Icon size={40} style={{ color: "#1c31b2" }} />
            <h5 className="card-title">{item.heading.text}</h5>
            <hr />
            <p className="card-text">{item.sub_heading.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      data-aos="fade-up"
      className={`container text-center mb-5 ${classes["features"]}`}
    >
      <Title title={sectionTitle.text} description={sectionDescription.text} />
      <div className={`mt-5 ${classes["features_cards"]}`}>
        <div className="row">{ItemContent}</div>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment HomepageDataBody1Features on PrismicHomePageDataBody1Features {
    id
    items {
      heading {
        text
      }
      icon {
        text
      }
      sub_heading {
        text
      }
    }
    primary {
      feature_title {
        text
      }
      feature_desciption {
        text
      }
    }
  }
`;

export default Features;
