import React from 'react'
import {Container, Loader} from 'semantic-ui-react'

const Loading = ({active}) => {
    return (

        <Container>
            <Loader active={active} />
        </Container>
    )
}



export default Loading
