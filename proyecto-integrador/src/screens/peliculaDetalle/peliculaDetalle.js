import React, { Component } from 'react'
import Buscador from '../../components/Buscador/Buscador';

 class CancionDetalle extends Component {
     constructor(props){
         super(props)
         this.state = {
              id: props.match.params.id,
              pelicula: {},
              generos: []
         }
         
     }

     componentDidMount() {
        
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=8fe477c9339c0a2e32b6b0fce8059603 ` )
        .then(res => res.json())
        .then(data => this.setState({
            pelicula: data,
            generos: data.genres,
        }))
        .catch(err => console.log(err))
        
        }


    render() {
        console.log(this.props);
        return (
            <>
                
                
                {
                    
                    this.state.pelicula.title === 0 ?
                    <p>No tenemos lo que buscas</p> 
                    :
                    <div>
                        <Buscador/>
                        <h2>{this.state.pelicula.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`}/>
                        <p>Rating: {this.state.pelicula.popularity}</p>
                        <p>Fecha de Estreno: {this.state.pelicula.release_date}</p>
                        <p>Duracion: {this.state.pelicula.runtime}</p>
                        <p>Sinopsis: {this.state.pelicula.overview}</p>
                        <ul>Generos:{this.state.generos.map((genero, idx) => <li key = {genero.name + idx}>{genero.name}</li>)}</ul>
                       

                    </div>

                }
               
                
            </>
        )
    }
}

export default CancionDetalle;
