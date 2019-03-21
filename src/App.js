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
      currentItemText: "sadfasd",
      currentImage: ""
    };
  }
  defaultTopText = text => {
    this.setState({ currentItemText: text });
  };
  memePreview = memePreview => {
    this.setState({ currentImage: memePreview });
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
          <MemePreviewer currentImage={this.state.currentImage} />
        </div>
        <div id="memeInputPanel">
          <MemeInputPanel
            text={this.state.currentItemText}
            defaultTopText={this.defaultTopText}
          />
        </div>
      </div>
    );
  }
}

export default App;
