import React from "react";
import * as classes from "./Sponsored.module.css";
import FirshPhoto from "../images/sponsored/img-1.png";
import SecondPhoto from "../images/sponsored/img-2.png";
import ThirdPhoto from "../images/sponsored/img-3.png";
import FourthPhoto from "../images/sponsored/img-7.png";
import FifthPhoto from "../images/sponsored/img-5.png";
import SixthPhoto from "../images/sponsored/img-6.png";

const Sponsored = () => {
  return (
    <div className={`container mb-5 ${classes["sponsored__content"]}`}>
      <p className="text-center mt-2">Powered By:</p>
      <div className={`row text-center ${classes["sponsored__img"]}`}>
        <div className="col-lg-2 col-sm-4 col-4">
          <img className="p-1 " height="40" src={FirshPhoto}></img>{" "}
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <img className="p-1 " height="40" src={SecondPhoto}></img>{" "}
        </div>
        <div className="col-lg-2 col-sm-4 col-4 ">
          <img className="p-1 " height="40" src={ThirdPhoto}></img>{" "}
        </div>

        <div className="col-lg-2 col-sm-4 col-4">
          <img className="p-1 " height="40" src={FourthPhoto}></img>{" "}
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <img className="p-1 " height="40" src={FifthPhoto}></img>{" "}
        </div>
        <div className="col-lg-2 col-sm-4 col-4">
          <img className="p-1 " height="40" src={SixthPhoto}></img>{" "}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment HomeDataBodySponsored on PrismicHomePageDataBodySponsored {
    id
    items {
      sponsor_logo {
        url
      }
    }
  }
`;

export default Sponsored;
