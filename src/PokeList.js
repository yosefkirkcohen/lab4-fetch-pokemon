import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        return (
            <div className='pokeList'>{
                this.props.dataState.map(pokemon => <PokeItem 
                                                        name={pokemon.pokemon}
                                                        image={pokemon.url_image}
                                                        type={pokemon.type_1}
                                                        />)
           }</div>
        )
    }
}
