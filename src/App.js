import React, { Component } from 'react';
import Header from './header.js';
import MainContainer from './Main-container.js';


class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MainContainer/>
    </div>
    );
  }
}

export default App;
