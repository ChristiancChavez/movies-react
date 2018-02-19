import React, { Component } from 'react';
import PrincipalContainerDescription from './principal-container-description.js';

class PrincipalContainer extends Component {
    render (){
        return (
            <div className="principal-container">
                <div className="trailer__movie">
                    <iframe className="trailer" src="https://www.youtube.com/embed/64-iSYVmMVY">Thor Ragnarock</iframe>
                </div>
                <PrincipalContainerDescription />
            </div>
        );
    }
}
export default PrincipalContainer;