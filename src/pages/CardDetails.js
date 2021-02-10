import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container} from 'semantic-ui-react'

class CardDetails extends React.Component {
    constructor() {
        super()
        this.state = {data: []}
    }
    componentDidMount () {
        axios.get(`https://api.pokemontcg.io/v2/cards/${this.props.match.params.id}`)
        .then(card=>{
            console.log(card.data.data)
            this.setState({data: card.data.data})
        }).catch(err => console.log(err))        
    }
    render() {
        return(
            <Container>
                {this.state.data.length !==0 &&
                <h2>{this.state.data.name}</h2>
                
                
                }
            </Container>
        )
    }

}



export default CardDetails
