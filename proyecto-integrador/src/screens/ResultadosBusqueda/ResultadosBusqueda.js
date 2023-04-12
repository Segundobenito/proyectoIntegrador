import React, { Component } from 'react'
import Buscador from '../../components/Buscador/Buscador'
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome'
class ResultadosBusqueda extends Component{
    constructor(props){
        super(props)
        this.state = {
            topPeliculas : [],
            backup: []
        }
    }

    actualizadorDeEstado(data){
        this.setState({
            topPeliculas : data
        })

    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603'
        .then( resp => resp.json())
        .then( data => this.setState({
            topPeliculas: data.results,
            backup : data.results
        }))
        .catch(err => console.log(err))
        
        )
    }


    render(){
        return(
            <div>
                <Buscador 
                actualizador = {(data) => this.actualizadorDeEstado(data)} 
                fuente = {this.state.backup}
                
                />
                <ContenedorHome topPeliculas={this.state.topPeliculas}/>
            </div>
        )
    }
}

export default ResultadosBusqueda