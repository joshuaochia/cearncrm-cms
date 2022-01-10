import React from "react";
import Title from "../components/Title";
import Image from "../images/image.png";
import * as classes from "./LatestBlogs.module.css";
const LatestBlogs = () => {
  return (
    <div className={`container mb-5 mt-5 ${classes["parent_cards"]}`}>
      <Title />
      <div className="row text-center justify-content-center">
        <div className="col-sm-4 col-8 pt-3">
          <div className={`card ${classes["custom__card"]}`}>
            <img className="card-img-top" src={Image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <hr />
              <p className="card-text mt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="pt-3">
                Read more..
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-8 pt-3">
          <div className={`card ${classes["custom__card"]}`}>
            <img className="card-img-top" src={Image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <hr />
              <p className="card-text mt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" className="pt-3">
                Read more..
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
