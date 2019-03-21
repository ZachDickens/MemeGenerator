import React, { Component } from "react";
import "./App.css";
import ThumbnailPicker from "./ThumbnailPicker";
import MemeInputPanel from "./MemeInputPanel";
import MemePreviewer from "./MemePreviewer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "./images/CryingJordan.png",
        "./images/LordOfRings.png",
        "./images/Picard.png",
        "./images/PrincessBride.png",
        "./images/SuspectBaby.png"
      ],
      currentImage: "",
      currentTopText: "hi",
      currentBottomText: "mom"
    };
  }
  setTopText = text => {
    this.setState({ currentTopText: text });
  };
  memePreview = memePreview => {
    this.setState({ currentImage: memePreview });
  };
  addNew = text => {
    this.setState({ currentTopText: text });
  };
  render() {
    return (
      <div>
        <div id="thumbnailPicker">
          <ThumbnailPicker
            images={this.state.images}
            memePreview={this.memePreview}
          />
        </div>
        <div id="memePreviewer">
          <MemePreviewer
            currentImage={this.state.currentImage}
            currentTopText={this.state.currentTopText}
            text={this.state.currentTopText}
          />
        </div>
        <div id="memeInputPanel">
          <MemeInputPanel
            text={this.state.currentItemText}
            currentTopText={this.state.currentTopText}
            addNew={this.addNew}
            setTopText={this.setTopText}
          />
        </div>
      </div>
    );
  }
}

export default App;
