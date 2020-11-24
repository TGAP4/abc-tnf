import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar/navbar';
import Home from './pages/home/home';
import Characters from './pages/characters/characters';
import Episodes from './pages/episodes/episodes';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/abc-tnf' component={Home} />
        <Route exact path='/abc-tnf/characters' component={Characters} />
        <Route exact path='/abc-tnf/episodes' component={Episodes} />
      </Switch>
    </>
  );
}

export default App;
