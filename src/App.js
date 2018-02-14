import React, { Component } from 'react';
import Image from './Images/poster.jpg';
import avatarImage from './Images/avatar.jpg';

class App extends Component {
  render() {
    return (
      <div>
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

      <div className="container"> 
        <div className="left-menu">
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

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster"></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>

              <div className="left-menu__listmovies">
                <div className="left-menu__movies">
                  <img className="left-menu__image" src={Image} alt="movie poster" ></img>
                  <h4 className="left-menu__title">Thor Ragnarock</h4>
                  <span className="left-menu__title">2017</span>
                </div>                 
              </div>
        </div>

        <div className="principal-container">
          <div className="trailer__movie"></div>
            <iframe className="trailer" src="https://www.youtube.com/embed/64-iSYVmMVY">Thor Ragnarock</iframe>
          <div className="principal-container__description">
            <section className="principal-container__description-info">
              <button className="principal-container__description-button"  type="button">ADD TO FAVORITES</button>
              <h3 className="principal-container__description-subtitle">Thor Ragnarock</h3>
            </section>
              <p className="principal-container__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor 
              incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.</p>
              <h3 className="principal-container__description-subtitle2">Similar Movies</h3>
            <div className="similar-movies">
              <div className="similar-movies__movie">

                <div className="similar-movies__grid">
                  <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

                <div className="similar-movies__grid">
                    <img className="similar-movies__image" src={Image} alt="movie poster"/>
                  <div className="similar-movies__text">
                    <p>Thor Ragnarock</p><span>2017</span>
                  </div>
                </div>

              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
