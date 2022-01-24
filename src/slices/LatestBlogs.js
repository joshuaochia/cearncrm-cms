import React, { useEffect } from "react";
import Title from "../components/Title";
import { graphql } from "gatsby";
import * as classes from "./LatestBlogs.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const LatestBlogs = ({ slice }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (!slice.items) return null;
  const { sub_heading, heading } = slice.primary;

  const LatestBlogsList = slice.items.map((item) => (
    <div className="col-sm-4 col-8 pt-3">
      <div className={`card ${classes["custom__card"]}`}>
        <img
          className="card-img-top"
          src={item.blog_thumbnail.url}
          height="250"
        />
        <div className="card-body">
          <h5 className="card-title">{item.blog_title.text}</h5>
          <hr />
          <p className="card-text mt-3">{item.blog_description.text}</p>
          <a href={item.blog_readmore.url} className="pt-3">
            Read more..
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      data-aos="fade-up"
      className={`container mb-5 mt-5 ${classes["parent_cards"]}`}
    >
      <Title title={heading.text} description={sub_heading.text} />
      <div className="row text-center justify-content-center">
        {LatestBlogsList}
      </div>
    </div>
  );
};

export const query = graphql`
  fragment HomepageDataBody1LatestBlogs on PrismicHomePageDataBody1LatestBlogs {
    id
    items {
      blog_description {
        text
      }
      blog_readmore {
        url
      }
      blog_thumbnail {
        url
      }
      blog_title {
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

export default LatestBlogs;
