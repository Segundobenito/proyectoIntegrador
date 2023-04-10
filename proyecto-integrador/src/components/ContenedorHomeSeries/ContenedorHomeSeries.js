import React, { Component } from 'react'
import HomeCards from '../../components/HomeCards/HomeCards';
import { Link } from 'react-router-dom';
let urlTopRatedSeries = "https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603";


 class ContenedorHomeSeries extends Component {

    
    //paso 1

    constructor() {
        super()
        this.state = {
            topSeries: [],
           
        }
    }


    componentDidMount() {
        fetch(urlTopRatedSeries)
        .then(res => res.json())
        .then(data => this.setState( 
            {
            topSeries: data.results,
           
        }))
        .catch(err => console.log(err))
        
        }

       
    render(

    ) {
        return (
            <React.Fragment>
                <section>
                    {
                    this.state.topSeries.map((unaSerie, idx) => <HomeCards key={unaSerie.name + idx} datosSerie={unaSerie} />)
                    }

<Link to='/peliculas/top' > <button>Ver las mejores Series</button></Link>
                </section>
                
            </React.Fragment>

        )
    }
}

export default ContenedorHomeSeries;
