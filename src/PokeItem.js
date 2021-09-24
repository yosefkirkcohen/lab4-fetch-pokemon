import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            
                <div className='pokeDiv' key={this.props.name}>
                       <p>{this.props.name}</p>
                       <p>type: {this.props.type}</p>
                       <img src={this.props.image} alt={this.props.name} />
                </div>
            
        )
    }
}
