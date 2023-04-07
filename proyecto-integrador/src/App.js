import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import NotFound from './components/NotFound/NotFound';
import peliculaDetalle from './screens/peliculaDetalle/peliculaDetalle';

function App() {
  return (

    <>
      <Header />
          <main>
          <Switch>
            
            <Route path = "/" exact = {true} component = {Home} />
            <Route path = "/favorites" component = {Favorites} />
            <Route path = '/peliculas/detalle/id/:id' component = {peliculaDetalle} />
            <Route path = "/resultados/:title" component = {Buscador} />
            <Route component = {NotFound} />

          </Switch>
          </main>
        
      <Footer />
   
    </>
  );
}

export default App;