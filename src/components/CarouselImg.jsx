//let's taste what react Components look like - Ahmed Magdy 18/9/2023
import React, { Component } from "react";

export default class CarouselImg extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal"
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
