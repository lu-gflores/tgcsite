import React from 'react'
import {Header, Container} from 'semantic-ui-react'
import Pokeball from '../images/pokeball.png'
import { motion } from 'framer-motion'

const NavHeader = () => {
    return (
        <div>
            <Container>
            <Header as='h1' icon textAlign='center'>
                <motion.img animate={{rotate: 360}} transition={{duration: 3}} className='ui image' src={Pokeball} />
                <Header.Content>Pokemon Trading Card React App</Header.Content>
            </Header>            
            </Container>
        </div>
    )
}

export default NavHeader
