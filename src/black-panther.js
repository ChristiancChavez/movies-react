import React, { Component } from 'react';
import BlackPantherImg from './Images/black-panther.jpg';

class BlackPanther extends Component {
    render() {
      return (
        <div>
            <h1>Black Panther</h1>
            <img src={BlackPantherImg}></img>
        </div>
      );
    }
  }
  
  export default BlackPanther;