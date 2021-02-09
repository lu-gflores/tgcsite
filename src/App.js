import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CardDetails from './pages/CardDetails'
import NavHeader from './components/NavHeader'
import PokemonCardList from './components/PokemonCardList'

function App() {

  return (
    <div className="App">
    <NavHeader/>

    <Router>
      <Route exact path='/' component={PokemonCardList} />
      <Route exact path='/:id' component={CardDetails} />
    </Router>
    
    </div>
  );
}

export default App;
