import React, { Component } from 'react'

export class EjemploDeComponentDidMount extends Component {
    constructor(props) {
        console.log("Constructor");
        super(props);
        this.state = {scroll: 0}
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            this.setState({scroll: window.scrollY})
        })
    }

    render() {
        console.log("Render")
        return (
            <div>
                <h4>Ciclo de montaje: componentDidmount</h4>
                <p>
                    Sexuarl tiene musho peligro te va a hasé pupitaa al ataquerl a gramenawer ese que llega fistro va usté muy cargadoo ahorarr te va a hasé pupitaa. Amatomaa llevame al sircoo pupita no puedor a gramenawer papaar papaar ese pedazo de benemeritaar al ataquerl mamaar condemor. Benemeritaar de la pradera a peich apetecan la caidita a wan no puedor qué dise usteer diodeno. No te digo trigo por no llamarte Rodrigor a gramenawer diodenoo ese que llega diodenoo llevame al sircoo hasta luego Lucas pupita tiene musho peligro qué dise usteer por la gloria de mi madre. No puedor sexuarl a gramenawer diodeno benemeritaar a wan pecador ahorarr al ataquerl no puedor te va a hasé pupitaa. A peich quietooor benemeritaar al ataquerl de la pradera se calle ustée. Jarl tiene musho peligro al ataquerl llevame al sircoo no te digo trigo por no llamarte Rodrigor ese pedazo de papaar papaar.
                    Tiene musho peligro apetecan ahorarr me cago en tus muelas hasta luego Lucas. Al ataquerl a peich hasta luego Lucas por la gloria de mi madre mamaar. Te voy a borrar el cerito diodenoo por la gloria de mi madre mamaar tiene musho peligro ese hombree papaar papaar apetecan la caidita. Ese que llega benemeritaar me cago en tus muelas mamaar hasta luego Lucas no puedor benemeritaar qué dise usteer. Mamaar a peich te voy a borrar el cerito ese pedazo de te voy a borrar el cerito no te digo trigo por no llamarte Rodrigor de la pradera de la pradera va usté muy cargadoo. Por la gloria de mi madre a peich diodeno ese pedazo de. Fistro me cago en tus muelas diodeno apetecan a wan hasta luego Lucas apetecan. Ahorarr te voy a borrar el cerito por la gloria de mi madre papaar papaar.
                </p>
                <p>
                    Sexuarl tiene musho peligro te va a hasé pupitaa al ataquerl a gramenawer ese que llega fistro va usté muy cargadoo ahorarr te va a hasé pupitaa. Amatomaa llevame al sircoo pupita no puedor a gramenawer papaar papaar ese pedazo de benemeritaar al ataquerl mamaar condemor. Benemeritaar de la pradera a peich apetecan la caidita a wan no puedor qué dise usteer diodeno. No te digo trigo por no llamarte Rodrigor a gramenawer diodenoo ese que llega diodenoo llevame al sircoo hasta luego Lucas pupita tiene musho peligro qué dise usteer por la gloria de mi madre. No puedor sexuarl a gramenawer diodeno benemeritaar a wan pecador ahorarr al ataquerl no puedor te va a hasé pupitaa. A peich quietooor benemeritaar al ataquerl de la pradera se calle ustée. Jarl tiene musho peligro al ataquerl llevame al sircoo no te digo trigo por no llamarte Rodrigor ese pedazo de papaar papaar.
                    Tiene musho peligro apetecan ahorarr me cago en tus muelas hasta luego Lucas. Al ataquerl a peich hasta luego Lucas por la gloria de mi madre mamaar. Te voy a borrar el cerito diodenoo por la gloria de mi madre mamaar tiene musho peligro ese hombree papaar papaar apetecan la caidita. Ese que llega benemeritaar me cago en tus muelas mamaar hasta luego Lucas no puedor benemeritaar qué dise usteer. Mamaar a peich te voy a borrar el cerito ese pedazo de te voy a borrar el cerito no te digo trigo por no llamarte Rodrigor de la pradera de la pradera va usté muy cargadoo. Por la gloria de mi madre a peich diodeno ese pedazo de. Fistro me cago en tus muelas diodeno apetecan a wan hasta luego Lucas apetecan. Ahorarr te voy a borrar el cerito por la gloria de mi madre papaar papaar.
                </p>
                <p>
                    Sexuarl tiene musho peligro te va a hasé pupitaa al ataquerl a gramenawer ese que llega fistro va usté muy cargadoo ahorarr te va a hasé pupitaa. Amatomaa llevame al sircoo pupita no puedor a gramenawer papaar papaar ese pedazo de benemeritaar al ataquerl mamaar condemor. Benemeritaar de la pradera a peich apetecan la caidita a wan no puedor qué dise usteer diodeno. No te digo trigo por no llamarte Rodrigor a gramenawer diodenoo ese que llega diodenoo llevame al sircoo hasta luego Lucas pupita tiene musho peligro qué dise usteer por la gloria de mi madre. No puedor sexuarl a gramenawer diodeno benemeritaar a wan pecador ahorarr al ataquerl no puedor te va a hasé pupitaa. A peich quietooor benemeritaar al ataquerl de la pradera se calle ustée. Jarl tiene musho peligro al ataquerl llevame al sircoo no te digo trigo por no llamarte Rodrigor ese pedazo de papaar papaar.
                    Tiene musho peligro apetecan ahorarr me cago en tus muelas hasta luego Lucas. Al ataquerl a peich hasta luego Lucas por la gloria de mi madre mamaar. Te voy a borrar el cerito diodenoo por la gloria de mi madre mamaar tiene musho peligro ese hombree papaar papaar apetecan la caidita. Ese que llega benemeritaar me cago en tus muelas mamaar hasta luego Lucas no puedor benemeritaar qué dise usteer. Mamaar a peich te voy a borrar el cerito ese pedazo de te voy a borrar el cerito no te digo trigo por no llamarte Rodrigor de la pradera de la pradera va usté muy cargadoo. Por la gloria de mi madre a peich diodeno ese pedazo de. Fistro me cago en tus muelas diodeno apetecan a wan hasta luego Lucas apetecan. Ahorarr te voy a borrar el cerito por la gloria de mi madre papaar papaar.
                </p>
                <p>
                    Sexuarl tiene musho peligro te va a hasé pupitaa al ataquerl a gramenawer ese que llega fistro va usté muy cargadoo ahorarr te va a hasé pupitaa. Amatomaa llevame al sircoo pupita no puedor a gramenawer papaar papaar ese pedazo de benemeritaar al ataquerl mamaar condemor. Benemeritaar de la pradera a peich apetecan la caidita a wan no puedor qué dise usteer diodeno. No te digo trigo por no llamarte Rodrigor a gramenawer diodenoo ese que llega diodenoo llevame al sircoo hasta luego Lucas pupita tiene musho peligro qué dise usteer por la gloria de mi madre. No puedor sexuarl a gramenawer diodeno benemeritaar a wan pecador ahorarr al ataquerl no puedor te va a hasé pupitaa. A peich quietooor benemeritaar al ataquerl de la pradera se calle ustée. Jarl tiene musho peligro al ataquerl llevame al sircoo no te digo trigo por no llamarte Rodrigor ese pedazo de papaar papaar.
                    Tiene musho peligro apetecan ahorarr me cago en tus muelas hasta luego Lucas. Al ataquerl a peich hasta luego Lucas por la gloria de mi madre mamaar. Te voy a borrar el cerito diodenoo por la gloria de mi madre mamaar tiene musho peligro ese hombree papaar papaar apetecan la caidita. Ese que llega benemeritaar me cago en tus muelas mamaar hasta luego Lucas no puedor benemeritaar qué dise usteer. Mamaar a peich te voy a borrar el cerito ese pedazo de te voy a borrar el cerito no te digo trigo por no llamarte Rodrigor de la pradera de la pradera va usté muy cargadoo. Por la gloria de mi madre a peich diodeno ese pedazo de. Fistro me cago en tus muelas diodeno apetecan a wan hasta luego Lucas apetecan. Ahorarr te voy a borrar el cerito por la gloria de mi madre papaar papaar.
                </p>
            </div>

        )
    }
}

export default EjemploDeComponentDidMount
