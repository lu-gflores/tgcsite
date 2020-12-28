import React from 'react'
import {Header, Container, Image} from 'semantic-ui-react'
import Pokeball from '../images/pokeball.jpg'

const NavHeader = () => {
    return (
        <div>
            <Container>
            <Header as='h1' icon textAlign='center'>
                <Image src={Pokeball} />
                <Header.Content>Pokemon Trading Card React App</Header.Content>
            </Header>            
            </Container>
        </div>
    )
}

export default NavHeader
