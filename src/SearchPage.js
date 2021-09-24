import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
// import data from './data.js'
import request from 'superagent'

export default class SearchPage extends Component {

    state = {
        sortOrder: 'asc',
        isLoading: false,
        query: '',
        data: []
    }

    // Call fetchSearch. componentDidMount is called on load.
    componentDidMount = async () => {
        this.fetchSearch()
    }

    changeHandler = (e) => {
        this.setState({query: e.target.value})
    }

    dropdownChange = async (e) => {
        await this.setState({ sortOrder: e.target.value})
        this.fetchSearch()
    }

    // function for getting data from the API
    fetchSearch = async () => {
        this.setState({isLoading: true})
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&perPage=1000`)
        this.setState({data: response.body.results})
        this.setState({isLoading: false})
    }

    render() {
        return (
            <div>
                <input onChange={this.changeHandler} value={this.state.query} />
                <Dropdown
                    handleChange={this.dropdownChange} />
                <button onClick={this.fetchSearch} >search</button>
                <div>
                    {
                    // this.state.isLoading
                    
                    this.state.data.map(pokemon => <div key={pokemon.pokemon}>
                       {pokemon.pokemon} </div>)}
                </div>
            </div>
        )
    }
}
