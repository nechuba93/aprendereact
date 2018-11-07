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
    //Declaración de props, simplifica referencias
    const { 
      arrayOfNumber, 
      multiply,
      objectWithinfo,
      title
    } = this.props

    // const textoSegunBool = this.props.boolean ? 'Cierto' : ' Falso'
    const mappedNumbers = arrayOfNumber.map(multiply)
    return (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithinfo.key}</p>
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p> */}
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='TestHello'  />
        </header>
        <Text 
          arrayOfNumber={[2, 3, 10]}
          objectWithinfo={{ key: 'valu', key2: 'otherValue' }}
          boolean={false} 
          multiply={(number) => number * 4}
          number={2} 
          text='TestText' 
          title={<h1>Este es el titulo</h1>}/>
      </div>
    );
  }
}

export default App;
