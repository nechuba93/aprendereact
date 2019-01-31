import React, { Component } from 'react';
import cars from './data/cars.json'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={() => alert('hola')}>Hola</button>
      </div>
    );
  }
}

export default App;
