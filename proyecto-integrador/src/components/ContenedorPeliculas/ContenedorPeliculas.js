import React, {Component} from 'react'
import HomeCards from '../HomeCards/HomeCards'

class ContenedorPeliculas extends Component{
    constructor(props){
        super(props)
        this.state={
            numero:1,
        }
    }

    actualizarEstado(){
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Aqui tendremos algo genial de peliculas</h1>
                {
                    this.props.topPeliculas.length <= 0 ?
                    <h2>Trayendo peliculas...</h2> :
                    this.props.topPeliculas.map(unaPelicula => <article>
                        <HomeCards datosPeliculas={unaPelicula} />
                    </article>)
                }
            </div>
        )
    }
}

export default ContenedorPeliculas