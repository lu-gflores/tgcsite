import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Container, Pagination} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import Loading from '../components/Loading'

const PokemonCardList = () => {
    const [pokemon, setPokemon] = useState([])
    const [query, setQuery] = useState('')
    // const [pageSize, setPageSize] = useState(25)
    const [activePage, setActivePage] = useState(1)
    const [loading, setloading] = useState(false)
    const [apiUrl, setApiUrl] = useState('https://api.pokemontcg.io/v2/cards?pageSize=24')
    //const apiUrl = `https://api.pokemontcg.io/v2/cards?`
    
    useEffect(() => {
      setloading(true)
      axios.get(apiUrl)
      .then(pokemon => {
        setloading(false)
        setPokemon(pokemon.data.data)
      }).catch(err => console.log(err))
      }, [apiUrl])
    
    const onChange = (e, pageInfo) => {
      setActivePage(pageInfo.activePage)
      setApiUrl(apiUrl + `&page=${pageInfo.activePage}`)
    }
      
    const queryCard = e => {
      setQuery(e.target.value.replace(/\s/g, ''))
    }
  
    const searchCard = () => {
      axios.get(apiUrl + `&q=name:${query}`)
      .then(pokemon => {
        setPokemon(pokemon.data.data)
        })
    }
  
   if(loading) {
     return <Loading active ={loading}/>
   }
    return (
        <Container>
        
        <Container textAlign='center'>
        <SearchInput className="ui big action input">
          <input type="text" onChange={queryCard} name='card' placeholder='Search card...'/>
          <button className='ui button' onClick={searchCard} type='button'>Search</button>
        </SearchInput>
        </Container>

        {pokemon && (

        <CardsContainer className="ui centered cards">
        
          {pokemon.map(pokeCard => (       
              <Link to={`/${pokeCard.id}`} name={pokeCard.name} image={pokeCard.images.small} className="ui card" key={pokeCard.id}>
                <div className="image">
                  <img src={`${pokeCard.images.small}`} alt={`${pokeCard.name}`} />
                </div>
              </Link>    
          ))}
        </CardsContainer> 
        )}  
          
          <Container textAlign='center' >
            <Pagination activePage={activePage} onPageChange={onChange} totalPages={10} ellipsisItem={null} />
          </Container>
        
        </Container>
    )
}

const CardsContainer =  styled.div`
  padding-bottom: 2rem;
  margin: 1rem 1rem;
  background-color:#bd4444;
  border-radius: 10% / 40%;
`


const SearchInput = styled.div`
  padding: 1.5rem 1.5rem;
`



export default PokemonCardList
