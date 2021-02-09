import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Container, Input} from 'semantic-ui-react'
import PagePagination from '../pages/CardDetails'

const PokemonCardList = () => {
    const [pokemon, setPokemon] = useState(null)
    const [query, setQuery] = useState('charmander')
    const [pageSize, setPageSize] = useState(10)
    // const [pageCount, setPageCount] = useState(1)
    // const [loading, setloading] = useState(true)
    // const [input, setInput] = useState('');
    const baseURL = `https://api.pokemontcg.io/v2/cards?q=name:${query}&pageSize=${pageSize}`
    
    useEffect(() => {
      //setloading(true)
      axios.get(baseURL)
      .then(pokemon => {
        console.log(pokemon.data)
        //setloading(false)
        setPokemon(pokemon.data.data)
        //setPageCount(10)
      }).catch(err => console.log(err))
      }, [baseURL])
    
  const handlePageChange = (event, value) => {
    //setPage(value)
  }
  
  const queryCard = e => {
    setQuery(e.target.value)
  }
  
  const searchCard = () => {
    axios.get(baseURL)
    .then(pokemon => {
      setPokemon(pokemon.data.card)
    })
  }
  
   //if(loading) return 'Please Wait...'
  
  
    return (
        <Container>

        <Input fluid name='pokemon' onChange={queryCard} onClick={searchCard} placeholder='Pikachu'/>
        
        {pokemon && (

        <div className="ui four cards">

          {pokemon.map(pokeCard => (       
              <Link to={`/${pokeCard.id}`} className="ui raised card" key={pokeCard.id}>
                <div className="image">
                  <img src={`${pokeCard.images.small}`} alt={`${pokeCard.name}`} />
                </div>
              </Link>    
          ))}
        </div> 
        )}        
        </Container>
    )
}


export default PokemonCardList
