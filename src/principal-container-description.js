import React, { Component } from 'react';
import DescriptionMovie from './description-movie.js';
import SimilarMovies from './similar-movies.js';

class PrincipalContainerDescription extends Component {
    render (){
        return ( 
            <div className="principal-container__description">
                <DescriptionMovie />  
                <SimilarMovies />
            </div>
        );
    }
}
export default PrincipalContainerDescription;