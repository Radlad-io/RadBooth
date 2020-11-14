import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import '../css/App.css';

import Navbar from '../shared/Navbar';
import Photo from '../content/PhotoContent';
import Video from '../content/VideoContent';
import GIF from '../content/GIFContent';
import Admin from '../pages/Admin';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Photo}/>
          </div>
          <div className="content">
            <Route path="/Video" component={Video}/>
          </div>
          <div className="content">
            <Route path="/gif" component={GIF}/>
          </div>
          <div className="content">
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;