import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class HomeCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito : false,
            descripcion: "Ver Mas",
            clase: "ocultar",
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)

        if(storageAArray !== null){
            let estaEnElArray = storageAArray.includes(this.props.datosPelicula.id)
            if(estaEnElArray){
                this.setState({
                    esFavorito:true
                })
            }
        }
    }

    cambiarTexto() {
        if (this.state.descripcion === "Ver Mas") {
            this.setState({
                descripcion: "Ver menos",
                clase: 'mostrar'
            })
        } else {
            this.setState({
                descripcion: 'Ver Mas',
                clase: 'ocultar'
            })
        }
    }

    agregarFav(id){
        let storage = localStorage.getItem('favoritos')
        
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
        }
        
        else {
          let deStringAArray = JSON.parse(storage)
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFav(id){
       let storage = localStorage.getItem('favoritos')
       let storageAArray = JSON.parse(storage)
       let filtro = storageAArray.filter((elm)=> elm !== id)
       let filtroAString = JSON.stringify(filtro)
       localStorage.setItem('favoritos', filtroAString)


       this.setState({
        esFavorito:false
       })

        }
         
  
        render () {  
          return (
              <div className="padre">
                  <h3>{this.props.datosPelicula.title}</h3>
                  <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`} alt="img" />
                  <p className={this.state.clase}>{this.props.datosPelicula.overview}</p>
                  <a className="descripcion" onClick={() => this.cambiarTexto()}>{this.state.descripcion}</a>
                  <Link className="detalleHome" to={`/peliculas/detalle/id/${this.props.datosPelicula.id}`}><button>Ir a detalle</button></Link>
                  {
                    this.state.esFavorito ?

                    <button onClick={()=> this.sacarFav(this.props.datosPelicula.id)}>Eliminar de Favoritos</button>

                    :

                    <button onClick={()=> this.agregarFav(this.props.datosPelicula.id)}>Agregar a favoritos</button>

                  }

                

                  
              </div>
          )
        }
        }

export default HomeCards;