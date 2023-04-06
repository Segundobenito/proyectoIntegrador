import React, { Component } from 'react';
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome';
import './styles.css';

 class Home extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
          info: ''
        }
      }

    render() {
        return (
            <>
              <main className = "myMain">
               <ContenedorHome />

              </main>
                
            </>
        )
    }
}

export default Home;
