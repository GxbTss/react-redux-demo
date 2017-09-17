import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import List from '../containers/List'
import NotFound from '../containers/NotFound'

export default class RouteMap extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="list" component={List}></Route>
          <Route path="detail/:id" component={Detail}></Route>
          <Route path="*" component={NotFound}></Route>
        </Route>
      </Router>
    )
  }
}
