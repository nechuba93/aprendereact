import React, { Component } from 'react'

class BotonQueLanzaError extends Component {
    state = { throwError: false }

    render() {
        if(this.state.throwError) {
            throw new Error('Error lanzado por boton')
        }

        return (
            <button onClick={() => this.setState({throwError: true})}>Lanzar error!</button>
        )
    }
}

export class EjemploDeComponentDidCatch extends Component {

    state = { hasError: false, errorMsg: ''}

    componentDidCatch(error, info){
        console.log('componentDidCatch');
        console.log({error, info});
        this.setState({hasError: true, errorMsg: error.toString()})
    }
    render() {

        if(this.state.hasError) {
            return (
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => {this.setState({hasError: false})}}>Volver</button>
                </div>
            )
        }

        return (
            <div>
                <h4>Ciclo de error: componentDidCatch</h4>
                <BotonQueLanzaError />
            </div>
        )
    }
}

export default EjemploDeComponentDidCatch
