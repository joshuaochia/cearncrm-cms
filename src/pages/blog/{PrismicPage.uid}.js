import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title";

import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices/index";

const PageTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicPage.data;
  console.log(data);
  console.log(doc, "detailed blog");

  return (
    <React.Fragment>
      <Title title={doc.title.text} description={doc.sub_title.text} />
      <SliceZone slices={doc.body1} components={components} />
    </React.Fragment>
  );
};

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        body1 {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBody1FullWidthImage
          ...PageDataBody1RichText
        }
        title {
          text
        }
        sub_title {
          text
        }
      }
      uid
    }
  }
`;

PageTemplate.Layout = Layout;
export default PageTemplate;
