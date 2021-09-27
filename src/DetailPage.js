import React, { Component } from 'react'
import request from 'superagent'

export default class DetailPage extends Component {
    
    state = {
        id: this.props.match.params._id,
        pokemon: '',
        isLoading: false
    }

    componentDidMount() {
        this.setState({isLoading: true})
        this.fetchPoke()
        this.setState({isLoading: false})
    }
    
    fetchPoke = async () => {
        
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({pokemon: response.body});
        console.log(response.body)
    }

    render() {

        return (
            this.state.isLoading ? <img src='spinner.gif' alt='spinner' /> :

            <div>
                <div>
                    {this.state.pokemon.pokemon}
                </div>
                <img src={this.state.pokemon.url_image} alt='fuck you'/>
                <div>
                    Type 1: {this.state.pokemon.type_1}
                </div>
                <div>
                    Type 2: {this.state.pokemon.type_2}
                </div>
                <div>
                    HP: {this.state.pokemon.hp} <br/>
                    Attack: {this.state.pokemon.attack} <br/>
                    Defense: {this.state.pokemon.defense}
                </div>
            </div>
        )
    }
}
