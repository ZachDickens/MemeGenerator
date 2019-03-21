import React, { Component } from "react";
import "./ThumbnailPicker.css";

class ThumbnailPicker extends Component {
  userSelectMeme = e => {
    this.props.memePreview(e.target.src);
  };
  render() {
    const { images } = this.props;
    const imageItems = images.map(item => (
      <li key={item}>
        <img src={item} onClick={this.userSelectMeme} />
      </li>
    ));
    return <ul id="imageItems">{imageItems}</ul>;
  }
}
export default ThumbnailPicker;
