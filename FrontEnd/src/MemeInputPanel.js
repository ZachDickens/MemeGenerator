import React, { Component } from "react";

class MemeInputPanel extends Component {
  onTextChange = event => {
    this.props.setTopText(event.target.value);
  };

  onTextChange2 = event => {
    this.props.setBottomText(event.target.value);
  };

  render() {
    const { currentTopText } = this.props;
    const { currentBottomText } = this.props;
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
        <label>
          Bottom Text
          <input
            type="text"
            value={currentBottomText}
            onChange={this.onTextChange2}
          />
        </label>
      </div>
    );
  }
}

export default MemeInputPanel;
