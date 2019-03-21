import React, { Component } from "react";

class ThumbnailPicker extends Component {
  render() {
    const { images } = this.props;
    const imageItems = images.map(item => (
      <li key={item}>
        <img src={item} />
      </li>
    ));
    return <ul id="imageItems">{imageItems}</ul>;
  }
}
export default ThumbnailPicker;
