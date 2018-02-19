import React, { Component } from 'react';
import SelectLeftMenu from './select-left-menu.js';
import ListMovies from './list-movies.js';

class LeftMenu extends Component {
    render () {
        return (
            <div className="left-menu">
                <SelectLeftMenu />
                <ListMovies />
            </div>
        );
    }
}
export default LeftMenu;