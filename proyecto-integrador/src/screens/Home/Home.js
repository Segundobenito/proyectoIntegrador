import React from 'react';
import ContenedorHome from '../../components/ContenedorHome/ContenedorHome';
import ContenedorHomeSeries from '../../components/ContenedorHomeSeries/ContenedorHomeSeries';
import './styles.css';


function Home() {
    return (
        <>
            <h1> PELICULAS</h1>
            <ContenedorHome />
            <h1 className='seriesH1'> SERIES</h1>
            <ContenedorHomeSeries />
        </>
    )
}


export default Home;