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
                    <NavLink exact activeClassName='header-link' to='/'>Home</NavLink>
                    <NavLink exact activeClassName='header-link' to='/searchPage'>Search</NavLink>
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
                          path="/pokemon/:_id" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
    )
  }
}
