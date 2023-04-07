import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards'
let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=      `


class VerTodasPeliculas extends Component {
    constructor(props){
        super (props)
        this.state = {
            array1: [],
            array2: [],
            paginaSiguiente: '',
        }
    }

    componentDidMount(){
    fetch(popularMovies)
            .then( res => res.json())
            .then( data => this.setState(
            {
                array1: data.results,
                array2: data.results,
                PaginaSiguiente: data.page,
                
            }))
            .catch()
        }

    load(){
        
    }


    render() {
    return (
    <React.Fragment>
      <section>
          {
              this.state.array2.length === 0 ?
              <p>Cargando</p> 
              :
            this.state.array2.map((peli1, idx) => <HomeCards key={unaPelicula.name + idx} datosPelicula={unaPelicula} /> )

          }
        <button className='load' type='button' onClick={() => this.load()}>
          <p>Cargar peliculas</p>
        </button>
      </section>
    </React.Fragment>
    )
  }
}


export default VerTodasPeliculas