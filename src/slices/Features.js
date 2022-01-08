import React from "react";
import * as classes from "./Features.module.css";
import { graphql } from "gatsby";
import { FaMap } from "@react-icons/all-files/fa/FaMap";
import { FaWarehouse } from "@react-icons/all-files/fa/FaWarehouse";
import { FaUserShield } from "@react-icons/all-files/fa/FaUserShield";
import Title from "../components/Title";
const Features = ({ slices }) => {
  const queryData = slices[0];

  // Primary Destructuring
  const {
    feature_title: sectionTitle,
    feature_desciption: sectionDescription,
  } = queryData.primary;

  // Slice Destructuring
  const items = queryData.items;

  return (
    <div className={`container text-center mb-5 ${classes["features"]}`}>
      <Title title={sectionTitle.text} description={sectionDescription.text} />
      <div className={`mt-5 ${classes["features_cards"]}`}>
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4 col-sm-6 pt-4">
              <div className={`card ${classes["card_content"]}`}>
                <div className="card-body">
                  <FaMap size={40} style={{ color: "#1c31b2" }} />
                  <h5 className="card-title">{item.heading.text}</h5>
                  <hr />
                  <p className="card-text">{item.sub_heading.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment HomeDataBodyFeatures on PrismicHomePageDataBodyFeatures {
    id
    items {
      heading {
        text
      }
      icon {
        url
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
