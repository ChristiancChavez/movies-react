import React, { Component } from 'react';
import MoviesListMovies from './movies-list-movies.js';

class ListMovies extends Component {
    render(){
        return (
            <div className="left-menu__listmovies">
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
                <MoviesListMovies />
            </div>    
        );  
    }
}
export default ListMovies;