import React from 'react'
import {Container} from 'semantic-ui-react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Pokeball from '../images/pokeball.png'

const Loading = ({active}) => {
    return (

        <Container>
            <LoaderContainer>
                <motion.img active={active} animate={{rotate: 360}} transition={{duration: 0.5}} className='ui medium centered image' src={Pokeball} />     
            </LoaderContainer>
        </Container>
    )
}

const LoaderContainer = styled.div`
    padding: 5rem 5rem;
`



export default Loading
