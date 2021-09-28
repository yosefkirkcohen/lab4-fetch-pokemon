import React, { Component } from 'react'
import PokeItem from './PokeItem'
import {Link} from 'react-router-dom'

export default class PokeList extends Component {
    render() {
        return (
            <div className='pokeList'>{
                this.props.dataState.map(pokemon => <Link to={`/pokemon/${pokemon._id}`} key={pokemon.pokemon}><PokeItem 
                                                        
                                                        name={pokemon.pokemon.toUpperCase()}
                                                        image={pokemon.url_image}
                                                        type={pokemon.type_1.toUpperCase()}
                                                        /></Link>)
           }</div>
        )
    }
}
