import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pokeball from '../images/pokeball.jpg'


class CardDetails extends React.Component {
    constructor() {
        super()
        this.state = {data: []}
    }
    componentDidMount () {
        axios.get(`https://api.pokemontcg.io/v1/cards?`)
             
}


}



export default CardDetails
