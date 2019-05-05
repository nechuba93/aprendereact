import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq'
}

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps(nextProps) {
        //Siempre se ejecutará cuando reciva props, da igual que sean iguales
        //Es útil para llamar a un servicio externo cuando recibe nuevas props
        console.log('componentWillReceiveProps')
        console.log(nextProps)
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })

    }

    render() {
        console.log('-> RENDER')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
    animal: 'panda'
}

export class EjemploCicloDeActualizacion extends Component {

    state = { animal: 'panda' }

    render() {
        return (
            <div>
                <h4>Ciclo de Actualización: ComponentWillReceiveProps</h4>
                <button onClick={() => this.setState({ animal: 'panda' })}>Panda</button>
                <button onClick={() => this.setState({ animal: 'cat' })}>Cat</button>
                <button onClick={() => this.setState({ animal: 'dolphin' })}>dolphin</button>
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}

export default EjemploCicloDeActualizacion
