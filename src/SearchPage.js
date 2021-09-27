import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
// import data from './data.js'
import request from 'superagent'
import PokeList from './PokeList.js'

let pageCount;

export default class SearchPage extends Component {

    state = {
        sortOrder: 'asc',
        isLoading: false,
        query: '',
        data: [],
        animation: 'searchPageContainer',
        page: 1
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

    handlePrev = async () => {
        await this.setState({page: this.state.page - 1})
        this.fetchSearch()
    }

    handleNext = async () => {
        await this.setState({page: this.state.page + 1})
        this.fetchSearch()
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
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&page=${this.state.page}&perPage=50`)
        this.setState({data: response.body.results})
        this.setState({isLoading: false})
        console.log(response.body)
        pageCount = response.body.count/response.body.perPage
    }

    

    render() {
        return (
            <div className={this.state.animation}>
                <div className='title'>
                    <h1>Find your Pokemon</h1>
                </div>
                <div>
                    Type in part of your pokemon's name. Do it now.
                </div>
                <input onChange={this.changeHandler} value={this.state.query} />
                <Dropdown
                    handleChange={this.dropdownChange} />
                <button className='searchButton' onClick={this.fetchSearch} >search</button>
                    <div>
                        {this.state.page !== 1 &&
                        <button onClick={this.handlePrev}>
                            Prev
                        </button>}
                        {this.state.page < pageCount &&
                        <button onClick={this.handleNext}>
                            Next
                        </button>}
                        <div>{this.state.page}</div>
                    </div>
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
