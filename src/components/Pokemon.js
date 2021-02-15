import React from 'react'

const Pokemon = (props) => {
    return (
        <div>
            <p>{props.attacks[0].name}</p>
        </div>
    )
}

export default Pokemon
