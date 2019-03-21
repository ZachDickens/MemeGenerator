import React, { Component } from "react";

class MemeInputPanel extends Component {
  onTextChange = event => {
    this.props.setTopText(event.target.value);
  };
  render() {
    const { currentTopText } = this.props;
    return (
      <div>
        <label>
          Top Text
          <input
            type="text"
            value={currentTopText}
            onChange={this.onTextChange}
          />
        </label>
      </div>
    );
  }
}

export default MemeInputPanel;
