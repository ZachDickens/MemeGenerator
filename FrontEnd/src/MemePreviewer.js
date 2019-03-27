import React, { Component } from "react";

class MemePreviewer extends Component {
  userAddTopText = e => {
    this.props.AddTopText(this.props.text);
  };
  userAddBottomText = e => {
    this.props.addBottomText(this.props.text);
  };

  render() {
    const {
      currentTopText,
      currentBottomText,
      currentImage,
      addNewMeme
    } = this.props;
    return (
      <div>
        <div id="MemeFile">
          <p id="topMeme">{currentTopText}</p>
          <img src={currentImage} />
          <p id="bottomMeme">{currentBottomText}</p>
        </div>
        <button onClick={addNewMeme}>Publish Meme</button>
      </div>
    );
  }
}

export default MemePreviewer;
