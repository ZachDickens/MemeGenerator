import React, { Component } from "react";

class MemePreviewer extends Component {
  render() {
    const { memePreview } = this.props;
    return (
      <div>
        <img src={this.props.currentImage} />
      </div>
    );
  }
}

export default MemePreviewer;
