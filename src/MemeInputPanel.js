import React, { Component } from "react";

class MemeInputPanel extends Component {
  onTextChange = event => {
    this.props.defaultTopText(event.target.value);
  };
  render() {
    const { text } = this.props;
    return (
      <div>
        <label>
          Top Text
          <input type="text" value={text} onChange={this.onTextChange} />
          <button>Submit</button>
        </label>
      </div>
    );
  }
}

export default MemeInputPanel;
