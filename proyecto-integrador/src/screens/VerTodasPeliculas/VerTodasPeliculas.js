import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards'
import Form from '../../components/Form/Form'
let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603`


class VerTodasPeliculas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array1: [],
      array2: [],
      nextPage: '',
    }
  }

  componentDidMount() {
    fetch(topRated)
      .then(res => res.json())
      .then(data => this.setState(
        {
          array1: data.results,
          array2: data.results,
          nextPage: data.page,

        }))
      .catch()
  }

  load() {
    let paginaSiguiente = `https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603&page=${this.state.nextPage + 1}`
    fetch(paginaSiguiente)
    .then(res => res.json())
    .then(
      data => this.setState({
        array1: this.state.array1.concat(data.results),
        array2: this.state.array1.concat(data.results),
        nextPage: data.page +1,
      }))
      .catch()
  }

  filtrado(texto) {
  
  let pelisfiltro = this.state.array1.filter( pelicula => pelicula.title.toLowerCase().includes(texto.toLowerCase()))
  this.setState({
    array2 : pelisfiltro
  })

}



  render() {
    return (
      <React.Fragment>



        <div>
          <Form filtrado={(texto) => this.filtrado(texto)}/>
        </div>


        <section>
          {
            this.state.array2.length === 0 ?
              <p>Cargando</p>
              :
              this.state.array2.map((unaPelicula, idx) => <HomeCards key={unaPelicula.name + idx} datosPelicula={unaPelicula} />)

          }
        

        </section>
        <button className='load' type='button' onClick={() => this.load()}>
          Cargar peliculas
          </button>
      </React.Fragment>
    )
  }
}


export default VerTodasPeliculas