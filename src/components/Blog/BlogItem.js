import React from "react";
import * as classes from "./BlogItem.module.css";
import { PrismicLink } from "@prismicio/react";

const BlogItem = (props) => {
  return (
    <div className={`row mt-5 mb-5 ${classes["blog__item"]}`}>
      <div
        className={`col-lg-2 col-sm-12 col-12 ${classes["blog__thumbnail"]}`}
      >
        <img className="img-fluid" src={props.img}></img>
      </div>
      <div
        className={`col-lg-10 col-sm-12 col-12 pt-3 pb-4 ${classes["blog__content"]}`}
      >
        <h4>{props.title}</h4>
        <p>{props.sub_title}</p>
        <PrismicLink
          id={props.id}
          href={`blog/${props.url}`}
          className="mt-2 primary-1"
        >
          Read More
        </PrismicLink>
      </div>
    </div>
  );
};

export default BlogItem;
