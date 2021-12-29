import React from "react";
import * as classes from "./Announcement.module.css";

const Announcement = () => {
  return (
    <div className={`primary-1 ${classes["announcement_wrapper"]}`}>
      <div className={`container ${classes["announcement__content"]}`}>
        <p>
          Get the christmas sale 50% off for 3 months till January 6, 2022!{" "}
        </p>
      </div>
    </div>
  );
};

export default Announcement;
