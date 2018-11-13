import React, { Component } from 'react';

class ComponenteA extends Comment {
    render () {
        return (
            <p>Componente A</p>
        )
    }
}

class ComponenteB extends Comment {
    render () {
        return (
            <p>Componente B</p>
        )
    }
}

export default class ConditionalSection extends Component {
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                <ComponenteA />
                <ComponenteB />
            </div>
        )
    }
}