import React, { Component } from 'react';
import konono_logo from './img/konono_logo_c.png';
import official from './img/official_w.png';
import logo from './img/logo.svg';
import './css/App.css';

// import Three from './Three'

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header base_color z-depth-3">
          <img src={konono_logo} className="App-logo" alt="logo" />
          <img src={official} className="App-title" alt="logo" />
          {/* <h1 className="App-title accent_color">Official Website</h1> */}
        </header>
        {/* <Three /> */}
      </div>
    );
  }
}

export default Header;
