import React from 'react'

const Pokemon = ({attacks, abilities}) => {

    return (
        <div>
            {attacks.map((attack, idx) => <p key={idx}><strong>{attack.name}</strong>: {attack.text}</p> )}
        </div>
    )
}

export default Pokemon
