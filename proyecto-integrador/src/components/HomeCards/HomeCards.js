import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class HomeCards extends Component {
constructor() {
    super()
    this.state = {
        descripcion : "Ver Mas",
        clase: "ocultar",
        canciones:[]
    }
}

cambiarTexto() {
    if(this.state.descripcion === "Ver Mas") {
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

componentDidMount() {
console.log("SOY EL DIDMOUNT");
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
.then(res => res.json())
.then(data => this.setState({
    canciones: data.data
}))
.catch(err => console.log(err))

}

componentDidUpdate(){
    console.log("Se actualizo");
}

componentWillUnmount() {

}

    render(props) {
        console.log("soy el render");
        return (
               
                    <div className = "padre">

                        {
                            this.state.canciones.length <= 0 ?
                            <h2>Trayendo canciones...</h2> :
                            this.state.canciones.map(cancion => <p class="nombrecancion">
                                {cancion.title}
                            </p>)
                        }
                        
                        
                        <img src = "../../img/logo.png" alt = "img" />
                        
                        <p className={this.state.clase}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

                        <a className = "descripcion" onClick = {() => this.cambiarTexto() }>{this.state.descripcion}</a>
                        
                        <Link className = "detalleHome" to = "/cancion-detalle">Ir a detalle</Link> 
                        <button >Agregar/Quitar de favoritos</button>

                     
                    </div>
                

           
            

        )
    }
}

export default HomeCards;


