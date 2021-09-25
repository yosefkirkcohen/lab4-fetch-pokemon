import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
// import data from './data.js'
import request from 'superagent'
import PokeList from './PokeList.js'


export default class SearchPage extends Component {

    state = {
        sortOrder: 'asc',
        isLoading: false,
        query: '',
        data: [],
        animation: 'searchPageContainer'
    }

    // Call fetchSearch. componentDidMount is called on load.
    componentDidMount = async () => {
        this.runAnimation()
        this.fetchSearch()
    }

    changeHandler = (e) => {
        this.setState({query: e.target.value})
    }

    dropdownChange = async (e) => {
        await this.setState({ sortOrder: e.target.value})
        this.fetchSearch()
        this.runAnimation()
    }

    runAnimation = () => {
        this.setState({animation: 'background-color-change searchPageContainer'})
        setTimeout(() => {
            this.setState({animation: 'searchPageContainer'})
        }, 9000) 
    }

    // function for getting data from the API
    fetchSearch = async () => {
        this.setState({isLoading: true})
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&perPage=`)
        this.setState({data: response.body.results})
        this.setState({isLoading: false})
    }

    

    render() {
        return (
            <div className={this.state.animation}>
                <div className='title'>
                    <h1>Find your Pokemon</h1>
                </div>
                <input onChange={this.changeHandler} value={this.state.query} />
                <Dropdown
                    handleChange={this.dropdownChange} />
                <button className='searchButton' onClick={this.fetchSearch} >search</button>
                <div>
                    {this.state.isLoading 
                     ? <img src='spinner.gif' alt='spinner'/>
                     : <PokeList 
                        dataState={this.state.data}
                     />}
                </div>
            </div>
        )
    }
}
