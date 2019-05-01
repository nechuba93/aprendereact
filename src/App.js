import React, { Component } from "react";
import "./App.css";


class App extends Component {

  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {mensajeInicial: 'Inicial'}
  }

  handleClick = () => {
    this.setState({mensajeInicial: ' cambiado'})
  }

  render() {
    console.log("Render");
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>
          Cambiar Mensaje
        </button>
      </div>
    );
  }
}

export default App;
