import React, { Component } from "react";
import "./ThumbnailPicker.css";

class ThumbnailPicker extends Component {
  userSelectMeme = e => {
    const myUrl = new URL(e.target.src);
    this.props.memePreview(myUrl.pathname);
  };
  render() {
    const { images } = this.props;
    const imageItems = images.map(item => (
      <li key={item}>
        <img src={item} alt="meme" onClick={this.userSelectMeme} />
      </li>
    ));
    return <ul id="imageItems">{imageItems}</ul>;
  }
}
export default ThumbnailPicker;
