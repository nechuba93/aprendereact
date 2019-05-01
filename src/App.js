import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types';


class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    if(typeof props.author === 'undefined'){
      console.warn("prop required");
    }
  }
  render() {
    const {author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <time>{date}</time>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h4>Children Props</h4> 
        <Article
          author='Nacho'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre children'>
          <p>El contenido que envolvemos dentro del componente será enviado al children. <strong>Y mantiene etiquetas</strong></p>
        </Article>
      </div>
    );
  }
}

export default App;
