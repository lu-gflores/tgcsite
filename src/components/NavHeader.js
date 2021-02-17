import React from 'react'
import {Header, Container, Image} from 'semantic-ui-react'
import Pokeball from '../images/pokeball.jpg'
import { motion } from 'framer-motion'

const NavHeader = () => {
    return (
        <div>
            <Container>
            <Header as='h1' icon textAlign='center'>
                <motion.img animate={{rotate: 360}} transition={{duration: 3}} class='ui image' src={Pokeball} />
                <Header.Content>Pokemon Trading Card React App</Header.Content>
            </Header>            
            </Container>
        </div>
    )
}

export default NavHeader
