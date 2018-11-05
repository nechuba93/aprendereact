import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/* Declarar componentes */

/* Forma 1 */
// function Hello (props) {
//   return <h2>{ props.title }</h2>
// }

/* Forma 2 */
// const Hello = (props) => <h2>{props.title}</h2>

/* Forma 3 */
class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    return <p>{this.props.text}</p>
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Hello'/>
        </header>
        <Text text='Hola'/>
      </div>
    );
  }
}

export default App;
