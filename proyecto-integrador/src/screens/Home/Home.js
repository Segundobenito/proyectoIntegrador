import React from 'react';
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome';
import ContenedorHomeSeries from '../../components/ContenedorHomeSeries/ContenedorHomeSeries';
import Buscador from '../../components/Buscador/Buscador';
import './styles.css'; 

   
function Home() {
  

    return (

        <>
        <Buscador />
        <h1> PELICULAS</h1>
        <ContenedorHome />
        <h1 className='seriesH1'> SERIES</h1>
        <ContenedorHomeSeries/>
            
      
            
        </>
    )

}


export default Home;
