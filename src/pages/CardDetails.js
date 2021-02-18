import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import {Container, Segment, Image, Divider} from 'semantic-ui-react'
import Pokemon from '../components/Pokemon'
import Trainer from '../components/Trainer'
import Loading from '../components/Loading'

const CardDetails = () => {
    const [card, setCard] = useState([])
    const [loading, setloading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setloading(true)
        const fetchData = async () => {
            const result = await
            axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
            console.log(result.data.data)
            setCard(result.data.data)
            setloading(false)
        }
        fetchData()      
    }, [id])

    if(loading) {
        return <Loading active={loading} />
    }

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

export default CardDetails
