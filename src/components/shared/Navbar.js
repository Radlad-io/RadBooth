import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import styled from 'styled-components';

// Icon import
import ImageIcon from '../../icons/camera.svg';
import VideoIcon from '../../icons/video.svg';
import GIFIcon from '../../icons/GIF.svg';
import SettingsIcon from '../../icons/settings.svg';

const NavbarStyles = styled.nav`

nav {
  height: 100px;
  width: 400px;
  position: absolute;
  bottom: 60px;
  background-color: #272727;
  border-radius: 25px;
  right: calc(50vw - 200px);
  text-align: center;
}

.nav-item {
  width: 80px;
  height: 80px;
  display: block;
  position: relative;
  margin: 10px;
  border-radius: 15px;
  float: left;
}

.nav-item img { 
    padding: 15px;
    margin: calc(50% - 31px)
}

.nav-item:nth-child(4) {
    float: right;
}

.nav-item:nth-child(1) {
    background-color: white;
}

`;

function Navbar() {
    return (
        <NavbarStyles>
            <HashRouter>
                <nav>
                    <div className='nav-item'>
                        <NavLink exact to="/" activeClassName="selected"><img src={ImageIcon} className='nav-icon'></img></NavLink>
                    </div>
                    <div className='nav-item'>
                        <NavLink to="/Video" activeClassName="selected"><img src={VideoIcon} className='nav-icon'></img></NavLink>
                    </div>
                    <div className='nav-item'>
                        <NavLink to="/gif" activeClassName="selected"><img src={GIFIcon} className='nav-icon'></img></NavLink>
                    </div>
                    <div className='nav-item'>
                        <NavLink to="/admin" activeClassName="selected"><img src={SettingsIcon} className='nav-icon'></img></NavLink>
                    </div>
                </nav>
            </HashRouter>
        </NavbarStyles>
    );
}

export default Navbar;