import React from 'react'
import {Container, Card} from 'semantic-ui-react'

const PokemonCardList = ({pokemon}) => {
    
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
