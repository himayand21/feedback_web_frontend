import React, { Component } from "react";

import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    var a;
    window.onbeforeunload = function(e) {
      a = setTimeout(function() {
        window.location.href = "https://feedback-loop.netlify.com";
      }, 200);
    };
    window.onunload = function() {
      clearTimeout(a);
    };
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
