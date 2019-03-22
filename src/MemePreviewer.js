import React, { Component } from "react";

class MemePreviewer extends Component {
  userAddTopText = e => {
    this.props.AddTopText(this.props.text);
  };
  userAddBottomText = e => {
    this.props.addBottomText(this.props.text);
  };

  render() {
    const { currentTopText } = this.props;
    const { currentBottomText } = this.props;
    return (
      <div>
        <p id="topMeme">{currentTopText}</p>
        <img src={this.props.currentImage} />
        <p id="bottomMeme">{currentBottomText}</p>
      </div>
    );
  }
}

export default MemePreviewer;
