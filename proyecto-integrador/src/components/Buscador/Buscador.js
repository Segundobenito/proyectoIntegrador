import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
        }
    }
    prevenirDefault(e){ 
        e.preventDefault();
    };
    guardarCambios(e){ 
        this.setState({
            input: e.target.value
        }); 
    };
    
    render () {
        return (
            <React.Fragment>
                <form onSubmit={(e) => this.prevenirDefault(e)}>
                    <input type='text' placeholder='¿Que pelicula buscas?' onChange={(e) => this.guardarCambios(e)} value={this.state.input} />
                    {
                        this.state.input ?
                            <Link to={`/resultados/${this.state.input}`}>
                                <input type='submit' value='submit' /> 
                            </Link> 
                            :
                            <input type='submit' value='submit' /> 
                    }
                </form> 
            </React.Fragment>
        )

    }
}

export default Buscador;