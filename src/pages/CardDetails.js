import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Container, Segment, Image, Divider, Table} from 'semantic-ui-react'
import Pokemon from '../components/Pokemon'
import Trainer from '../components/Trainer'

const CardDetails = () => {
    const [card, setCard] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await
            axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
            console.log(result.data.data)
            setCard(result.data.data)
        }
        fetchData()      
    }, [id])

    const cardType = card.supertype 
    let cardData
    
    if(cardType === 'Trainer') {
        cardData = <Trainer rules={card.rules} />
    }
    if(cardType === 'Pokémon') {
        cardData = <Pokemon attacks={card.attacks} abilities={card.abilities} />
    }
    return(
        <Container>
            <Link to='/' className='ui button'>Back</Link>

            {card.length !== 0  && 
                
            <Segment padded='very'>         
                <Image src={card.images.small}  alt={card.name} floated='right'/>
                    <h1>{card.name}</h1>
                    <Divider />

                    <Container textAlign='justified'>
                    <h2>Set: <Image src={card.set.images.symbol} size='mini' spaced/> {card.set.name}, {card.set.series} series </h2>
                    <h2>Released In: {card.set.releaseDate}</h2>
                    <h2>Rarity: {card.rarity}</h2>
                    <h5>Number: {card.number}</h5>
                    <h5>Artist: {card.artist}</h5>
                    <h5>Type: {card.subtypes}</h5>
                    {cardData}

                    <h5>Prices URL: <a href={card.tcgplayer.url} target='_blank' rel="noreferrer">TGC Site</a></h5>

                    </Container>
            </Segment>      
             }
        </Container>
    )
}

const cardDesc = styled.div`


`


// class CardDetails extends React.Component {
//     constructor() {
//         super()
//         this.state = {data: []}
//     }
//     componentDidMount () {
//         axios.get(`https://api.pokemontcg.io/v2/cards/${this.props.match.params.id}`)
//         .then(card=>{
//             console.log(card.data.data)
//             this.setState({data: card.data.data})
//         }).catch(err => console.log(err))        
//     }
//     render() {
//        const cardType = this.state.data.supertype 
//        if(cardType === 'Pokemon') {
//         <Pokemon name={this.state.data.name} />
//        }
//         return(
//             <Container>
//                 <Link to='/' className='ui button'>Back</Link>
//                 {this.state.data.length !==0 &&
//                 <Segment> 
//                     <Image src={this.state.data.images.small} alt={this.state.data.name} floated='left'/>
//                     <h2>{this.state.data.name} </h2>
//                     <h5>Artist: {this.state.data.artist}</h5>
                    
//                     {/* <p><strong>{this.state.data.attacks[0].name}</strong> : {this.state.data.attacks[1].text} </p>
//                     <p><strong>{this.state.data.attacks[1].name === null}</strong> : {this.state.data.attacks[1].text} </p> */}


//                 </Segment>
//                 }
//             </Container>
//         )
//     }

// }



export default CardDetails
