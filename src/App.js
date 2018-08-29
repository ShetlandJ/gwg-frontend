import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'

import Home from './views/Home'
import DonateForm from './views/DonateForm'


class App extends Component {
  render() {
    return (
      <div>
        <Router history={ this.props.history }>
          <div>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/donate-games" component={ DonateForm }/>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
