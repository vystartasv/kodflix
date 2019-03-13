import React, { Component } from "react";
import "./App.css";
import alien from "./images/alien-poster-3-lareg.jpg";
import darkest from "./images/darkest-hour-poster2-large.jpg";
import dunkirk from "./images/dunkirkmain.jpg";
import disaster from "./images/disaster-artist-poster-2-xl.jpg";
import gold from "./images/gold-poste-uk.jpg";
import daddys from "./images/daddy-poster-2.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <br />
        <br />
        <div className="container">
          <div className="item">
            <img src={daddys} alt="Daddy's Home 2" />
            <div className='overlay'>
            <h1>Daddy's Home 2</h1>
            </div>
          </div>
          <div className="item">
            <img src={darkest} alt="Darkest Hour" />
            <div className='overlay'>
            <h1>Darkest Hour</h1>
            </div>
          </div>
          <div className="item">
            <img src={dunkirk} alt="Dunkirk" />
            <div className='overlay'>
            <h1>Dunkirk</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={disaster} alt="The Disaster Artist" />
            <div className='overlay'>
            <h1>The Disaster Artist</h1>
            </div>
          </div>
          <div className="item">
            <img src={alien} alt="Alien: Covenant" />
            <div className='overlay'>
            <h1>Alien: Covenant</h1>
            </div>
          </div>
          <div className="item">
            <img src={gold} alt="Gold" />
            <div className='overlay'>
            <h1>Gold</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
