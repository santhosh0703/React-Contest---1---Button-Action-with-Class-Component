import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div id="main">
        {
          <button
            id="click"
            onClick={() =>
              this.setState({
                text: (
                  <p id="para">
                    Hello, I've learnt to use the full-stack evaluation tool.
                    This makes me so happy
                  </p>
                )
              })
            }
          >
            Button
          </button>
        }
      </div>
    );
  }
}

export default App;
