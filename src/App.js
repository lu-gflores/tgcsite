import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavHeader from './components/NavHeader'
import PagePagination from './components/PagePagination'
import PokemonCardList from './components/PokemonCardList'
function App() {
  const baseURL = 'https://api.pokemontcg.io/v1/cards'

  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [currentUrl, setCurrentUrl] = useState(baseURL)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    axios.get(baseURL)
    .then(pokemon => {
      setPokemon(pokemon.data.cards)
      console.log(pokemon.data.cards)
    }).catch(err => console.log(err))
    }, [])
  

 // if(loading) return 'Please Wait...'


  return (
    <div className="App">
    <NavHeader/>
     <h1>Hey react app</h1>

     <PokemonCardList pokemon={pokemon} />

     <PagePagination 
     />
    </div>
  );
}

export default App;
