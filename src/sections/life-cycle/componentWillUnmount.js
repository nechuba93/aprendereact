import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
    state = { windowWidth: 0 }

    _updateStateWithWindowWitdh = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount() {
        this._updateStateWithWindowWitdh()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWitdh
        )
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWitdh
        )
    }

    render() {
        return (
            <div>
                <p>Ancho de la ventana:  {this.state.windowWidth}</p>
            </div>
        )
    }
}

export class EjemploDeComponentWillUnmount extends Component {
    state = { mostrarComponente: true }
    render() {
        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h4>Ciclo de desmontaje: ComponentWillUnMount</h4>
                    <ComponenteADesmontar />
                    <button onClick={() => this.setState({mostrarComponente: false})} >Desmontar componente</button>
                </div>
            )
        }
        return (
            <p>Coponente desmontado</p>
        )
    }
}

export default EjemploDeComponentWillUnmount
