import React, { Component } from 'react';
import Movies from './movies.js';

class SimilarMovies extends Component {
    render () {
        return (
            <div className="similar-movies">
                <Movies />
            </div>
        );
    }
}
export default SimilarMovies;