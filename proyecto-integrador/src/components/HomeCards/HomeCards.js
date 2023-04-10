import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class HomeCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripcion: "Ver Mas",
            clase: "ocultar",
        }
    }

    cambiarTexto() {
        if (this.state.descripcion === "Ver Mas") {
            this.setState({
                descripcion: "Ver menos",
                clase: 'mostrar'
            })
        } else {
            this.setState({
                descripcion: 'Ver Mas',
                clase: 'ocultar'
            })
        }
    }



    render() {
        console.log("soy el render");
        return (
            <div className="padre">
                <h3>{this.props.datosPelicula.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`} alt="img" />
                <p className={this.state.clase}>{this.props.datosPelicula.overview}</p>
                <a className="descripcion" onClick={() => this.cambiarTexto()}>{this.state.descripcion}</a>
                <Link className="detalleHome" to={`/peliculas/detalle/id/${this.props.datosPelicula.id}`}><button>Ir a detalle</button></Link>
                <button >Agregar/Quitar de favoritos</button>
            </div>
        )
    }
}

export default HomeCards;