import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [par, setPara] = useState("");
    function handleClick() {
      setPara(
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      );
    }
    return (
      <div id="main">
        {par}
        <button id="click" onClick={handleClick}>
          Button
        </button>
      </div>
    );
  }
}

export default App;
