import React, { Component } from 'react'
import SearchPage from './SearchPage'
import './App.css'
import Home from './Home.js'
import DetailPage from './DetailPage'
import {
  BrowserRouter as Router, 
  NavLink, 
  Route, 
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
                <Router>
                  <header>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/searchPage'>Search</NavLink>
                  </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/searchPage" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                          path="/:_id" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
    )
  }
}
