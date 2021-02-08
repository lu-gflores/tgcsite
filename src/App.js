import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Input} from 'semantic-ui-react'
import axios from 'axios'
import CardDetails from './pages/CardDetails'
import NavHeader from './components/NavHeader'
import PagePagination from './components/PagePagination'
import PokemonCardList from './components/PokemonCardList'

function App() {

  return (
    <div className="App">
    <NavHeader/>

    <Router>
      <Route exact path='/' component={PokemonCardList} />
      {/* <Route exact path='/:id' component={CardDetails} /> */}
    </Router>

      {/* <Input fluid action='search' onChange={queryCard} onClick={searchCard} placeholder='Pikachu'/>

     <PokemonCardList pokemon={pokemon} />

     <PagePagination pageCount={pageCount} page={page} onPageChange={handlePageChange}/> */}
    </div>
  );
}

export default App;
