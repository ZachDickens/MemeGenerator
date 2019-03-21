import React, { Component } from "react";

class MemePreviewer extends Component {
  userAddTopText = e => {
    this.props.AddTopText(this.props.text);
  };
  render() {
    const { currentTopText } = this.props;
    return (
      <div>
        <p>{currentTopText}</p>
        <img src={this.props.currentImage} />
      </div>
    );
  }
}

export default MemePreviewer;
