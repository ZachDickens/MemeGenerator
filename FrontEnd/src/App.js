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
        "/images/LordOfRings.png",
        "/images/Picard.png",
        "/images/PrincessBride.png",
        "/images/SuspectBaby.png",
        "/images/CrazyGirl.jpg",
        "/images/ManFinger.jpeg"
      ],
      currentImage: "/images/Picard.png",
      currentTopText: "Your Text",
      currentBottomText: "Goes Here",
      allMemes: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:44384/api/meme")
      .then(res => res.json())
      .then(json => this.setState({ allMemes: json }));
  }

  setTopText = text => {
    this.setState({ currentTopText: text });
  };
  memePreview = imageUrl => {
    this.setState({ currentImage: imageUrl });
  };
  setBottomText = text => {
    this.setState({ currentBottomText: text });
  };
  addNewMeme = () => {
    const meme = {
      currentTopText: this.state.currentTopText,
      currentBottomText: this.state.currentBottomText,
      currentImage: this.state.currentImage
    };

    fetch("https://localhost:44384/api/meme", {
      method: "POST",
      body: JSON.stringify(meme),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const newMemes = [...this.state.allMemes, meme];
          this.setState({ allMemes: newMemes });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <div className="Background">
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
              addNewMeme={this.addNewMeme}
            />
          </div>
          <div id="memeInputPanel">
            <MemeInputPanel
              text={this.state.currentItemText}
              currentTopText={this.state.currentTopText}
              currentBottomText={this.state.currentBottomText}
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
