import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards';
import { Link } from 'react-router-dom';
let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603";


 class ContenedorHome extends Component {

    
    //paso 1

    constructor() {
        super()
        this.state = {
            topPeliculas: [],
           
        }
    }


    componentDidMount() {
        fetch(urlTopRatedMovies)
        .then(res => res.json())
        .then(data => this.setState( 
            {
            topPeliculas: data.results,
           
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
                <div className='padreBoton'>
                <Link to='/peliculas/top' > <button>Ver las mejores peliculas</button></Link>
                </div>
                
            </React.Fragment>

        )
    }
}

export default ContenedorHome;
