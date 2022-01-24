import * as React from "react";
import { useEffect } from "react";
import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Layout from "../components/Layout/Layout";
import TwoColumn from "../components/TwoColumn";
import Aos from "aos";
import "aos/dist/aos.css";

const IndexPage = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const queryData = data.prismicHomePage.data;
  const {
    hero: twoColImg,
    hero_sub_heading: subHeading,
    title: heading,
  } = queryData;

  return (
    <>
      <TwoColumn
        heading={heading}
        heroImg={twoColImg}
        subHeading={subHeading}
      />
      <SliceZone
        data-aos="fade-in"
        components={components}
        slices={queryData.body1}
      />
    </>
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
