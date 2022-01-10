import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class TestimonialItem extends Component {
  renderIndicator() {}
  render() {
    console.log(this.props.content, "item");
    return (
      <Carousel
        dynamicHeight={true}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
      >
        {this.props.content.map((item) => (
          <div>{item.testimonial.text}</div>
        ))}
      </Carousel>
    );
  }
}

export default TestimonialItem;
