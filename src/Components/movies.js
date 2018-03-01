import React, { Component } from 'react';
import Movie from './movie.js';

class Movies extends Component {
    render () {
        return (
            <div className="similar-movies__movie">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        );
    }
}
export default Movies;