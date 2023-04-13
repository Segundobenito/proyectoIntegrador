import React, { Component } from 'react';
import "./styles.css";
import ContenedorPeliculas from '../../components/ContenedorPeliculas/ContenedorPeliculas';


class Favorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8fe477c9339c0a2e32b6b0fce8059603/${id}`)
                        .then(resp => resp.json())
                        .then(data => data)

                    )
                })
            )
            .then(data => this.setState({
                favoritos: data.results
            }))
            .catch(err => console.log(err))
        }
    }
    

    render() {
        return (
         <ContenedorPeliculas topPeliculas={this.state.favoritos}/>
        )
    }
    }

export default Favorites;