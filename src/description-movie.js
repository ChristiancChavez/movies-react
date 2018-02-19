import React, { Component } from 'react';

class DescriptionMovie extends Component{
    render (){
        return (
            <div>
                <section className="principal-container__description-info">
                    <button className="principal-container__description-button"  type="button">ADD TO FAVORITES</button>
                    <h3 className="principal-container__description-subtitle">Thor Ragnarock</h3>
                </section>
                <p className="principal-container__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor 
                incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
                </p>
                <h3 className="principal-container__description-subtitle2">Similar Movies</h3>
            </div>
        );
    }
}
export default DescriptionMovie;