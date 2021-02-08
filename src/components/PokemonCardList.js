import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container, Card} from 'semantic-ui-react'

const PokemonCardList = () => {
    const [pokemon, setPokemon] = useState([])
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [loading, setloading] = useState(true)
    const baseURL = `https://api.pokemontcg.io/v1/cards?name=${query}&page=${page}`
    
    useEffect(() => {
      setloading(true)
      axios.get(baseURL)
      .then(pokemon => {
        setloading(false)
        setPokemon(pokemon.data.cards)
        setPageCount(10)
      }).catch(err => console.log(err))
      }, [baseURL])
    
  const handlePageChange = (event, value) => {
    setPage(value)
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
  
   if(loading) return 'Please Wait...'
  
  
    return (
        <Container>

        <Card.Group itemsPerRow={4}>
        {pokemon.map(pokeCard => (
            <Card key={pokeCard.id} color='orange' image={pokeCard.imageUrl} />
        ))}
        </Card.Group>
        </Container>
    )
}


export default PokemonCardList
