import React from "react";
import { graphql } from "gatsby";

const RichText = ({ slice }) => {
  const { primary, items } = slice;

  return (
    <div className="container">
      <div>{primary.richtext_title.text}</div>
      <div>{items.map((item) => item.body.text)}</div>
    </div>
  );
};

export const query = graphql`
  fragment PageDataBody1RichText on PrismicPageDataBody1RichText {
    id
    primary {
      richtext_title {
        text
      }
    }
    items {
      body {
        text
      }
    }
  }
`;

export default RichText;
