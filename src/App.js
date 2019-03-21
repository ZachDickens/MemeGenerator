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
      currentItemText: "sadfasd"
    };
  }
  defaultTopText = text => {
    this.setState({ currentItemText: text });
  };
  render() {
    return (
      <div>
        <ThumbnailPicker images={this.state.images} />
        <div>Meme Preview</div>
        <MemeInputPanel
          text={this.state.currentItemText}
          defaultTopText={this.defaultTopText}
        />
      </div>
    );
  }
}

export default App;
