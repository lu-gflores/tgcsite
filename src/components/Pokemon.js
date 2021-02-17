import React from 'react'
import styled from 'styled-components'
const Pokemon = ({attacks, abilities}) => {

    return (
        <div>
            {attacks.map((attack, idx) => <p key={idx}><strong>{attack.name}</strong>: {attack.text}</p> )}
        </div>
    )
}



export default Pokemon
