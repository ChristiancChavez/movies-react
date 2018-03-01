import React, { Component } from 'react';
import avatarImage from '../Images/avatar.jpg';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <a className="header__menu" href="">
                    <span className="header__linebar"></span>
                    <span className="header__linebar"></span>
                    <span className="header__linebar"></span>
                </a>
                <h1 className="header__title">Christian's <span className="header__title--movies">Movies</span></h1>
                
                <div className="header__icon-container">
                    <a href=""><span className="header__icon header__icon--star"></span></a>
                    <a href=""><span className="header__icon header__icon--movie"></span></a>
                    <a href=""><span className="header__icon header__icon--play"></span></a>
                    <a href=""><span className="header__icon header__icon--film"></span></a>
                </div>  
                <div className="avatar">
                    <p className="avatar__name">Christian Chavez</p>
                    <img className="avatar__image" src={avatarImage} alt=""></img>
                </div>      
            </div>
        );
    }
}
export default Header;