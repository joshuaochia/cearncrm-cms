import React from "react";
import { graphql } from "gatsby";
const FullWidthImage = ({ slice }) => {
  if (!slice.items) return null;

  const AllImages = slice.items.map((item) => (
    <img class="img-fluid" src={item.image.url} />
  ));
  return <div className="container">{AllImages}</div>;
};

export const query = graphql`
  fragment PageDataBody1FullWidthImage on PrismicPageDataBody1FullWidthImage {
    id
    items {
      image {
        url
      }
    }
  }
`;

export default FullWidthImage;
