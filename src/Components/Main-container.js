import React, { Component } from 'react';
import LeftMenu from './Left-menu.js';
import PrincipalContainer from './principal-container.js';

class MainContainer extends Component {
    render() {
        return(
            <div className="container"> 
                <LeftMenu />
                <PrincipalContainer />
            </div>
        );
    }
}

export default MainContainer;