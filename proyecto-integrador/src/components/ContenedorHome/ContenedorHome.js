import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards';

let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=";


 class ContenedorHome extends Component {

    
    //paso 1

    constructor() {
        super()
        this.state = {
            topPeliculas: []
        }
    }


    componentDidMount() {
        fetch(urlTopRatedMovies)
        .then(res => res.json())
        .then(data => this.setState({
            topPeliculas: data.results
        }))
        .catch(err => console.log(err))
        
        }

    render(

    ) {
        return (
            <React.Fragment>
                <section>
                    {
                    this.state.topPeliculas.map((unaPelicula, idx) => <HomeCards key={unaPelicula.name + idx} datosPelicula={unaPelicula} />)
                    }
                </section>

            </React.Fragment>

        )
    }
}

export default ContenedorHome;
