import React, { Component } from 'react'

export class ComponentWillMount extends Component {
    constructor(props) {
        console.log("Constructor");
        super(props);
        this.state = { mensaje: 'Inicial' }
    }

    componentWillMount() {
        console.log("componentWillMount")
        this.setState({mensaje: 'modificado'})
    }

    render() {
        console.log("Render");
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )
    }
}

export default ComponentWillMount
