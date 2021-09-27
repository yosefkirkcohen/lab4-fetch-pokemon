import React, { Component } from 'react'
import SearchPage from './SearchPage'
import './App.css'
import Home from './Home.js'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
                <Router>
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
                        {/* <Route 
                          path="/users/:myId" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                        /> */}
                    </Switch>
                </Router>
            </div>
    )
  }
}
