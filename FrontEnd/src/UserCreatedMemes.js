import React, { Component } from "react";
import MemeInputPanel from "./MemeInputPanel";
import "./UserCreatedMemes.css";

class UserCreatedMemes extends Component {
  render() {
    const { allMemes } = this.props;
    const userMemes = allMemes.map(item => (
      <div>
      <ul id="UserUl">
      <li key={item}>
        <p id="userTopMeme">{item.currentTopText}</p>
        <img src={item.currentImage} alt="meme" />
        <p id="userBottomMeme">{item.currentBottomText}</p>
      </li>
      </ul>
      </div>
    ));
    return <ul id="userMemes">{userMemes}</ul>;
  }
}

export default UserCreatedMemes;
