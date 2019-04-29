import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactPage from './components/ContactPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div style={{ width: '99vw' }}>
            <Appbar />
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={ContactPage} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
