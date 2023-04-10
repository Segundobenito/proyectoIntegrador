import React, { Component } from 'react'
import HomeCardsSeries from '../../components/HomeCardsSeries/HomeCardsSeries';
import { Link } from 'react-router-dom';
import "./styles.css"
let urlTopRatedSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603";


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
                <section className='contenedorPadre'>
                    {
                    this.state.topSeries.map((unaSerie, idx) => <HomeCardsSeries key={unaSerie.name + idx} datosSerie={unaSerie} />)
                    }

                
                </section>
                <div className='padreBoton'>
                <Link to='/series/top' className='boton'> <button>Ver las mejores Series</button></Link>
                </div>
            </React.Fragment>

        )
    }
}

export default ContenedorHomeSeries;
