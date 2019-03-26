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
        "./images/LordOfRings.png",
        "./images/Picard.png",
        "./images/PrincessBride.png",
        "./images/SuspectBaby.png",
        "./images/CrazyGirl.jpg",
        "./images/ManFinger.jpeg"
      ],
      currentImage: "./images/Picard.png",
      currentTopText: "Your Text",
      currentBottomText: "Goes Here"
    };
  }
  componentDidMount() {
    fetch("https://localhost:44349/api/meme")
      .then(res => res.json())
      .then(json => this.setState({ images: json }));
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
  setBottomText = text => {
    this.setState({ currentBottomText: text });
  };
  render() {
    return (
      <div class="Background">
        <div id="body">
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
              currentBottomText={this.state.currentBottomText}
              text={this.state.currentTopText}
            />
          </div>
          <div id="memeInputPanel">
            <MemeInputPanel
              text={this.state.currentItemText}
              currentTopText={this.state.currentTopText}
              currentBottomText={this.state.currentBottomText}
              addNew={this.addNew}
              setTopText={this.setTopText}
              setBottomText={this.setBottomText}
            />
          </div>
          <div id="titleText">
            <p>Meme Generator</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
