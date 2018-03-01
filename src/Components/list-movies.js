import React, { Component } from 'react';
import LeftMovie from './Left-Movie.js';

class ListMovies extends Component {
    render(){
        return (
            <div className="left-menu__listmovies">
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
                <LeftMovie />
            </div>    
        );  
    }
}
export default ListMovies;