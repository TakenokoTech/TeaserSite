import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

// import Three from './Three'

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Three /> */}
      </div>
    );
  }
}

export default Header;
