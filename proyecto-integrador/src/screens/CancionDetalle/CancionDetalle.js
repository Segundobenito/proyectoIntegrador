import React, { Component } from 'react'

 class CancionDetalle extends Component {
     constructor(props){
         super(props)
         this.state = {
              id: props.match.params.id,
              cancion: ''
         }
         
     }

     componentDidMount() {
        
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${this.state.id} ` )
        .then(res => res.json())
        .then(data => this.setState({
            cancion: data
        }))
        .catch(err => console.log(err))
        
        }


    render() {
        console.log(this.props);
        return (
            <>
                <h1>Este es el detalle de la cancion</h1>
                {
                    
                    this.state.cancion.title ?
                    <p>{this.state.cancion.title}</p> 
                    :
                    <p>No existe esta cancion</p>
                }
               
                
            </>
        )
    }
}

export default CancionDetalle;
