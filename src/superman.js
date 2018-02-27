import React, { Component } from 'react';
import SupermanImg from './Images/superman.jpg';

class Superman extends Component {
    render() {
      return (
        <div>
            <h1>Black Panther</h1>
            <img src={SupermanImg}></img>
        </div>
      );
    }
  }
  
  export default Superman;