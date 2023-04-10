import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
  }

  evitarEnter(e) {
    e.preventDefault();
  };

  traerDatos(evento) {
    this.setState({
      value: evento.target.value,
    },
      () => this.props.filtrado(this.state.value))
  }


  render() {
    return (
      <form onSubmit={(e) => this.evitarEnter(e)} >
        <input type='text' name='formulario' value={this.state.value} onChange={(evento) => this.traerDatos(evento)} />
      </form>
    )
  }
}

export default Form