import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import InfoIcon from '../../icons/Info.svg';
import CameraIcon from '../../icons/camera-1.svg';
import EventIcon from '../../icons/calendar.svg';
import SettingsIcon from '../../icons/settings.svg';
import HomeIcon from '../../icons/home.svg';

const AdminbarStyles = styled.nav`
nav {
  height: 680px;
  width: 100px;
  position: absolute;
  bottom: 60px;
  background-color: #272727;
  border-radius: 25px;
  left: 60px;
  text-align: center;
}

.nav-item {
  width: 80px;
  height: 80px;
  display: block;
  position: relative;
  float: left;
  margin: 10px;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 15px;
  margin-top: calc(50% - 31px);
}

.nav-item:nth-child(1){
  background-color: white;
  border-radius: 20px;
}
.nav-item:nth-child(5){
  margin-top: 175px;
}

`;

function Adminbar() {
  return (
    <AdminbarStyles>
      <nav>
        <div className='nav-item'>
          <li><NavLink to="/admin"><img src={InfoIcon} className='nav-icon' activeClassName="selected"></img></NavLink></li>
        </div>
        <div className='nav-item'>
          <li><NavLink to="/admin/camera"><img src={CameraIcon} className='nav-icon' activeClassName="selected"></img></NavLink></li>
        </div>
        <div className='nav-item'>
          <li><NavLink to="/admin/event"><img src={EventIcon} className='nav-icon' activeClassName="selected"></img></NavLink></li>
        </div>
        <div className='nav-item'>
          <a href="">
            <li><NavLink to="/admin/settings"><img src={SettingsIcon} className='nav-icon' activeClassName="selected"></img></NavLink></li>
          </a>
        </div>
        <div className='nav-item'>
          <a href="">
            <li><NavLink to="/"><img src={HomeIcon} className='nav-icon' activeClassName="selected"></img></NavLink></li>
          </a>
        </div>
      </nav>
    </AdminbarStyles>
  );
}

export default Adminbar;