import React, { Component } from 'react'
import './styles.css'
import HomeCardsSeries from '../../components/HomeCardsSeries/HomeCardsSeries'
import Form from '../../components/Form/Form'
let topRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603`



class VerTodasSeries extends Component {
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
    let paginaSiguiente = `https://api.themoviedb.org/3/tv/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603&page=${this.state.nextPage + 1}`
    fetch(paginaSiguiente)
      .then(res => res.json())
      .then(
        data => this.setState({
          array1: this.state.array1.concat(data.results),
          array2: this.state.array1.concat(data.results),
          nextPage: data.page + 1,
        }))
      .catch()
  }

  filtrado(texto) {
    let serieFiltro = this.state.array1.filter(serie => serie.name.toLowerCase().includes(texto.toLowerCase()))
    this.setState({
      array2: serieFiltro
    })

  }



  render() {
    return (
      <React.Fragment>
        <div className='form'>
          <Form filtrado={(texto) => this.filtrado(texto)} />
        </div>
        <section>
          {
            this.state.array2.length === 0 ?
              <img src='../../public/img/gifCargando.gif' />
              :
              this.state.array2.map((unaSerie, idx) => <HomeCardsSeries key={unaSerie.name + idx} datosSerie={unaSerie} />)
          }
        </section>
        <button className='load' type='button' onClick={() => this.load()}>
          Cargar Series
        </button>
      </React.Fragment>
    )
  }
}


export default VerTodasSeries