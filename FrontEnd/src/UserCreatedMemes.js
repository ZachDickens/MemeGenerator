import React, { Component } from "react";
import MemeInputPanel from "./MemeInputPanel";
import "./ThumbnailPicker.css";

class UserCreatedMemes extends Component {
  render() {
    const { allMemes } = this.props;
    const userMemes = allMemes.map(item => (
      <li key={item}>
        <p id="userTopMeme">{item.currentTopText}</p>
        <img src={item.currentImage} alt="meme" />
        <p id="userBottomMeme">{item.currentBottomText}</p>
      </li>
    ));
    return <ul id="userMemes">{userMemes}</ul>;
  }
}

export default UserCreatedMemes;
