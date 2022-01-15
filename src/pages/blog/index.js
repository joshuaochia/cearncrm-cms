import React from "react";
import Layout from "../../components/Layout/Layout";
import AllBlog from "../../components/Blog/AllBlog";
import { graphql } from "gatsby";

const IndexBlog = ({ data }) => {
  const BlogList = data.allPrismicPage.nodes;
  const { data: content } = data.prismicBlogList;

  return (
    <>
      <AllBlog content={content} items={BlogList} />
    </>
  );
};

IndexBlog.Layout = Layout;
export default IndexBlog;

export const query = graphql`
  query BlogIndex {
    allPrismicPage {
      totalCount
      nodes {
        data {
          title {
            text
          }
          sub_title {
            text
          }
          thumbnail {
            url
          }
        }
        uid
        id
      }
    }
    prismicBlogList {
      data {
        sub_title {
          text
        }
        title {
          text
        }
      }
    }
  }
`;
