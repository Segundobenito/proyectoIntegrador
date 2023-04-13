import React, { Component } from 'react';
import "./styles.css";
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome';
import HomeCards from '../../components/HomeCards/HomeCards';
import HomeCardsSeries from '../../components/HomeCardsSeries/HomeCardsSeries';

class Favorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            favoritos: [],
            favoritosSerie: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8fe477c9339c0a2e32b6b0fce8059603`)
                        .then(resp => resp.json())
                        .then(data => data)

                    )
                })
            )
            .then(data =>  this.setState({
                favoritos: data
                
            }))
            .catch(err => console.log(err))
        }
        let storage2 = localStorage.getItem('favoritosSerie')
        if(storage2 !== null){
            let storageAArray2 = JSON.parse(storage2)
            Promise.all(
                storageAArray2.map(id =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=8fe477c9339c0a2e32b6b0fce8059603`)
                        .then(resp => resp.json())
                        .then(data => data)

                    )
                })
            )
            .then(data =>  this.setState({
                favoritosSerie: data
            }))
            .catch(err => console.log(err))
        }
    }
    

    render() {
        return (
         <>
            {
                this.state.favoritos.length <= 0 ?
                <h2>Cargando..</h2>
                :
                this.state.favoritos.map((unaPelicula, idx) => <HomeCards key={unaPelicula.name + idx} datosPelicula={unaPelicula} />)
                
                
        }
        
        {
            this.state.favoritosSerie.length <= 0 ?
            <h2>Cargando..</h2>
            :
            this.state.favoritosSerie.map((unaSerie, idx) => <HomeCardsSeries key={unaSerie.name + idx} datosSerie={unaSerie} />)

        }

    
         </>
        )
    }
    }

export default Favorites;