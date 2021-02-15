import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import {Container, Segment, Image} from 'semantic-ui-react'
import Pokemon from '../components/Pokemon'

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

    return(
        <Container>
            <Link to='/' className='ui button'>Back</Link>

            {card.length !== 0  && 
                
            <Segment>
                <Image src={card.images.small}  alt={card.name} floated='left'/>
                    <h2>{card.name}</h2>
                    <h5>Rarity: {card.rarity}</h5>
                    <h5>Artist: {card.artist}</h5>
            </Segment>      
             }
        </Container>
    )
}

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
