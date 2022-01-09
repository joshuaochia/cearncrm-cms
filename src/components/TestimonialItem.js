import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import React from "react";

const TestimonialItem = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default TestimonialItem;
