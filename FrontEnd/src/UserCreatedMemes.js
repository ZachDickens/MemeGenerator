import React, { Component } from "react";
import MemeInputPanel from "./MemeInputPanel";

class UserCreatedMemes extends Component {
  render() {
    const { allMemes } = this.props;
    const userMemes = allMemes.map(item => (
      <li key={item}>
        <img src={item} alt="meme" />
      </li>
    ));
    return <ul id="userMemes">{userMemes}</ul>;
  }
}

export default UserCreatedMemes;
