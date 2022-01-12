import * as React from "react";
import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout/Layout";
import TwoColumn from "../components/TwoColumn";

const IndexPage = ({ data }) => {
  const queryData = data.prismicHomePage.data;
  const {
    hero: twoColImg,
    hero_sub_heading: subHeading,
    title: heading,
  } = queryData;

  return (
    <React.Fragment>
      <TwoColumn
        heading={heading}
        heroImg={twoColImg}
        subHeading={subHeading}
      />
      <SliceZone components={components} slices={queryData.body1} />
    </React.Fragment>
  );
};

export const query = graphql`
  query HomePage {
    prismicHomePage {
      url
      tags
      type
      prismicId
      data {
        hero {
          url
        }
        hero_sub_heading {
          text
        }
        title {
          text
        }
        body1 {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBody1Features
          ...HomepageDataBody1Sponsored
          ...HomepageDataBody1Testimonials
          ...HomepageDataBody1LatestBlogs
        }
      }
    }
  }
`;

IndexPage.Layout = Layout;
export default IndexPage;
