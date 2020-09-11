import React from 'react'

const List = (props) => {
    const {pokemon} = props;
    
    return (
        <div>
            <h1>All Pokemon:</h1>
            <ol>
                {
                    pokemon.map((pok, i) => {
                        return <li key={i}>{pok.name}</li>;
                    })
                }
            </ol>
            
        </div>
    )
}

export default List