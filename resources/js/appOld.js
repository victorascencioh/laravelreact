require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
