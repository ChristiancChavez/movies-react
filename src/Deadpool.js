import React, { Component } from 'react';
import DeadpoolImg from './Images/deadpool.jpg';

class Deadpool extends Component {
    render() {
      return (
        <div>
            <h1>deadpool</h1>
            <img src={DeadpoolImg}></img>
        </div>
      );
    }
  }
  
  export default Deadpool;