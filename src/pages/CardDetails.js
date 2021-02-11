import React from 'react'
import axios from 'axios'
import {Container, Segment, Image} from 'semantic-ui-react'

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
                <Segment> 
                    <Image src={this.state.data.images.small} alt={this.state.data.name} floated='left'/>
                    <h2>{this.state.data.name}</h2>
                    <h3>Artist: {this.state.data.artist}</h3>
                    
                    <h4>Prices:From ${this.state.data.tcgplayer.prices.holofoil.low} to  ${this.state.data.tcgplayer.prices.holofoil.high}</h4>
                </Segment>
                }
            </Container>
        )
    }

}



export default CardDetails
