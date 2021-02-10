import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Container, Pagination} from 'semantic-ui-react'


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
      setQuery(e.target.value)
    }
  
    const searchCard = () => {
      axios.get(apiUrl + `&q=name:${query}`)
      .then(pokemon => {
        setPokemon(pokemon.data.data)
        })
    }
  
   if(loading) return 'Please Wait...'
    return (
        <Container>
        
        <SearchInput className="ui action input">
          <input type="text" onChange={queryCard} name='card' placeholder='Search card...'/>
          <button className='ui button' onClick={searchCard} type='button'>Search</button>
        </SearchInput>

        {pokemon && (

        <div className="ui centered cards">
        
          {pokemon.map(pokeCard => (       
              <Link to={`/${pokeCard.id}`} name={pokeCard.name} image={pokeCard.images.small} className="ui card" key={pokeCard.id}>
                <div className="image">
                  <img src={`${pokeCard.images.small}`} alt={`${pokeCard.name}`} />
                </div>
              </Link>    
          ))}
        </div> 
        )}  
          
          <Container textAlign='center' >
            <Pagination activePage={activePage} onPageChange={onChange} totalPages={10} ellipsisItem={null} />
          </Container>
        
        </Container>
    )
}

const SearchInput = styled.div.attrs(props => ({
  className: 'ui action input',
}))`
  padding: 1.5rem 1.5rem;
`



export default PokemonCardList
