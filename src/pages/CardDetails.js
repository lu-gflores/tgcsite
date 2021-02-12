import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
        // const attackMoves = this.state.data.attacks.map(attack => {
        //     console.log(attack)
            // return (<li key={attack}>{attack}</li>)
        // })
        return(
            <Container>
                <Link to='/' className='ui button'>Back</Link>
                {this.state.data.length !==0 &&
                <Segment> 
                    <Image src={this.state.data.images.small} alt={this.state.data.name} floated='left'/>
                    <h2>{this.state.data.name} Lv. {this.state.data.level}</h2>
                    <h5>Artist: {this.state.data.artist}</h5>
                    {/* <p><strong>{this.state.data.attacks[0].name}</strong> : {this.state.data.attacks[1].text} </p>
                    <p><strong>{this.state.data.attacks[1].name === null}</strong> : {this.state.data.attacks[1].text} </p> */}


                </Segment>
                }
            </Container>
        )
    }

}



export default CardDetails
