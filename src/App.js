import React, { Component } from 'react';

import { VisibleList } from './visible-list/visible-list';
import { VisibleDialog } from './visible-dialog/visible-dialog';

import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <VisibleList/>
        <VisibleDialog/>
      </div>
    );
  }
}

export default App;
