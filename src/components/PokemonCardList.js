import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Container, Input} from 'semantic-ui-react'
import PagePagination from '../pages/CardDetails'

const PokemonCardList = () => {
    const [pokemon, setPokemon] = useState(null)
    const [query, setQuery] = useState('')
    const [pageSize, setPageSize] = useState(10)
    // const [pageCount, setPageCount] = useState(1)
    // const [loading, setloading] = useState(true)
    // const [input, setInput] = useState('');
    const baseURL = `https://api.pokemontcg.io/v2/cards?`
    
    useEffect(() => {
      //setloading(true)
      axios.get(baseURL)
      .then(pokemon => {
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
    axios.get(baseURL+ `q=name:${query}`)
    .then(pokemon => {
      console.log(pokemon.data)
      setPokemon(pokemon.data.data)
    })
  }
  
   //if(loading) return 'Please Wait...'
    return (
        <Container>
        <div className="ui fluid action input">
          <input type="text" onChange={queryCard} name='card' placeholder='Search card...'/>
          <button className='ui button' onClick={searchCard} type='button'>Search</button>
        </div>
        
        {/* <Input fluid name='pokemon' onChange={queryCard} action={searchCard} placeholder='Pikachu'/> */}
        
        {pokemon && (

        <div className="ui four cards">

          {pokemon.map(pokeCard => (       
              <Link to={`/${pokeCard.id}`} name={pokeCard.name} image={pokeCard.images.small} className="ui raised card" key={pokeCard.id}>
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
