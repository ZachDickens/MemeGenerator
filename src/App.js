import React, { Component } from "react";
import "./App.css";
import ImageList from "./ImageList";
import MemePreview from "./MemePreview";
import MemeText from "./MemeText";
class App extends Component {
  render() {
    return (
      <div>
        <div>Image List</div>
        <div>Meme Preview</div>
        <div>Meme Text</div>
      </div>
    );
  }
}

export default App;
