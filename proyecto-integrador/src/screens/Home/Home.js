import React from 'react';
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome';
import ContenedorHomeSeries from '../../components/ContenedorHomeSeries/ContenedorHomeSeries';
import Buscador from '../../components/Buscador/Buscador';
import './styles.css'; 

   
function Home() {
  

    return (

        <>
        <Buscador />
            <ContenedorHome />
            <ContenedorHomeSeries/>
            
      
            
        </>
    )

}


export default Home;
