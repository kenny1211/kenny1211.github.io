import React, { Component } from 'react';
import './App.css';
import Appbar from './components/Appbar';

class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <div className="row">
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default App;
