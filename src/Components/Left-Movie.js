import React, { Component } from 'react';
import Image from '../Images/poster.jpg';

class LeftMovie extends Component {
    render (){
        return (
            <div className="left-menu__movies">
                <img className="left-menu__image" src={Image} alt="movie poster"></img>
                <h4 className="left-menu__title">Thor Ragnarock</h4>
                <span className="left-menu__title">2017</span>
            </div>     
        );
    }
}
export default LeftMovie;