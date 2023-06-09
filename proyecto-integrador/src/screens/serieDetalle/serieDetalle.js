import React, { Component } from 'react'
import Buscador from '../../components/Buscador/Buscador'
import './styles.css'

class SeriesDetalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            series: {},
            generos: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=8fe477c9339c0a2e32b6b0fce8059603 `)
            .then(res => res.json())
            .then(data => this.setState({
                series: data,
                generos: data.genres,
            }))
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.props);
        return (
            <>
                {
                    this.state.series.title === 0 ?
                        <p>No tenemos lo que buscas</p>
                        :
                        <section className='sectionPadre'>
                        <div className='hijo1'>
                            <h2>{this.state.series.name}</h2>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.state.series.poster_path}`} />
                        </div>
                        <div className='hijo2'>
                            <p>Rating: {this.state.series.popularity}</p>
                            <p>Fecha de Estreno: {this.state.series.first_air_date}</p>
                            <ul>Generos:{this.state.generos.map((genero, idx) => <li key={genero.name + idx}>{genero.name}</li>)}</ul>
                        </div>
                        <div className='sinopsis'>
                        <p>Sinopsis: {this.state.series.overview}</p>
                        </div>
                        </section>
                        
                }
            </>
        )
    }
}

export default SeriesDetalle;