import React, { Component } from 'react';

class SelectLeftMenu extends Component {
    render () {
        return (
            <select className="left-menu__categories" name="select">
                    <option disabled selected>Select a Movie</option>
                    <option className="js-favorites" value="favorites">Favorites</option>
                    <option>Terror</option>
                    <option>Fantasy</option>
                    <option>Thriller</option>
                    <option>Comedy</option>
                    <option>Romantic</option>
                    <option>Adventure</option>
                    <option>Action</option>
                    <option>War</option>
                    <option>Western</option>
                </select>
        );
    }

}
export default SelectLeftMenu;