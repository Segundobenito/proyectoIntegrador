import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <>
      <Header />

        <Switch>
          <Route path = "/" exact = {true} component = {Home} />
          <Route path = "/favorites" component = {Favorites} />

        </Switch>
        
      <Footer />
   
    </>
  );
}

export default App;