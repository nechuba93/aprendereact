import React, { Component } from 'react';
import cars from './data/cars.json'
import './App.css';

class CarItem extends Component {
  render() {
    const { car } = this.props

    return (
      <li key={car.id}>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
  
}


class App extends Component {
  render() {

    return (
      <div className="App">
        <h4>Trabajando con listas</h4>
        <ul>
          {
            cars.map(car => {
              return (
               <CarItem car={car} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
