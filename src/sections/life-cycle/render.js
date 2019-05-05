import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hola Render!</h1>

export class Render extends Component {

    constructor(props) {
        console.log("Constructor");
        super(props);
        this.state = { mensaje: 'Inicial' }
    }

    componentWillMount() {
        console.log("componentWillMount")
        // this.setState({mensaje: 'modificado'})
    }

    render() {
        console.log('render')
        // return this.state.mensaje === 'Inicial' ? 'sip!' : null
        return [
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'/>,
            <HelloRender key='C'/>,
            <h3 key='D'>Cuarto elemento</h3>            
        ]
    }
}

export default Render
