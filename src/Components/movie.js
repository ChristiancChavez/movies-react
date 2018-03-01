import React, { Component } from 'react';
import Image from '../Images/poster.jpg';

class Movie extends Component {
    render () {
        return (
            <div className="similar-movies__grid">
                <img className="similar-movies__image" src={Image} alt="movie poster"/>
                <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                </div>
            </div>
        );
    }
}
export default Movie;