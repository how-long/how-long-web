import React, { Component } from "react";
import ManageTopic from "./containers/ManageTopic";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>How long</h2>
        </div>

        <ManageTopic />
      </div>
    );
  }
}

export default App;
