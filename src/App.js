import React, { Component } from 'react';
import './App.css';
import Appbar from './components/Appbar';
// import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        {/* <div className="row justify-content-center"> */}
        {/* <div className="col-6 m-auto align-items-center" style={{ height: '100%' }}>
            <About />
          </div> */}
        <Portfolio />
        {/* </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
