import React, { Component } from "react";
import "./App.css";
import EjemploDeComponentWillUnmount from "./sections/life-cycle/componentWillUnmount";


class App extends Component {
  render() {
    return (
      <div className="App">
        <EjemploDeComponentWillUnmount />
      </div>
    );
  }
}

export default App;
