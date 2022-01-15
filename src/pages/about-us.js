import * as React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import FourContent from "../components/FourContent";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const AboutUs = ({ data }) => {
  const { data: queryData } = data.prismicAboutUs;
  const { body1: homePageData } = data.prismicHomePage.data;

  return (
    <>
      <FourContent
        title={queryData.title}
        description={queryData.sub_title}
        items={queryData.four_content}
      />
      <SliceZone components={components} slices={homePageData} />
    </>
  );
};

export const query = graphql`
  query MyQuery {
    prismicAboutUs {
      data {
        four_content {
          content_description {
            text
          }
          content_icon {
            text
          }
          content_title {
            text
          }
        }
        sub_title {
          text
        }
        title {
          text
        }
      }
    }
    prismicHomePage {
      data {
        body1 {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBody1LatestBlogs
        }
      }
    }
  }
`;

AboutUs.Layout = Layout;
export default AboutUs;
