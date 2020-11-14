import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import ISOIcon from '../../icons/ISO.svg';
import ShutterIcon from '../../icons/shutter.svg';
import ApertureIcon from '../../icons/aperture.svg';

import SelectInput from '../shared/SelectInput';


const AdminCameraContentStyles = styled.nav`


h1 {
  color: black;
}

p {
  color: black;
}
.wrapper {
  width: 1000px;
  position: absolute;
  left: 160px;
  margin: 60px;
}

.admin-header{
  color: #272727;
  text-align: left;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 35px;
  margin: 0 10px;
}

hr {
  color: #e3e3e3;
  background-color: #e3e3e3;
  border: 9.5px solid #e3e3e3;
  margin: -20px 2px 20px 2px;
}

.preview-image {
  height: 270px;
}

.col-1 {
  width: 485px;
  float: left;
  margin-right: 15px;
}

.col-2 {
  width: 485px;
  float: left;
  margin-left: 15px;
}

/* input, select {
  width: 100%;
} */


`;

function AdminCameraContent() {
  return (
    <AdminCameraContentStyles>
      <div className="AdminCameraContent">
        <div class="wrapper">
          <h1 className="admin-header">Camera Panel</h1>
          <hr></hr>
          <form>
            <div className="col-1">
              <div class="preview-image">
                <img src="https://picsum.photos/480/270"></img>
              </div>
              <p>Click image for full preview</p>

              <label>ISO</label>
              <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
              </div>
              <label>Shutter</label>
              <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
              </div>

              <label>Aperture</label>
              <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
              </div>
            </div>
            <div className="col-2">
              <label>Camera Model:</label>
              <p>Sony Alpha A7III (PC Control)</p>
              <SelectInput />
              <SelectInput />
              <SelectInput />
              <SelectInput />
              <SelectInput />





            </div>
          </form>
        </div>
      </div>
    </AdminCameraContentStyles>
  );
}

export default AdminCameraContent;