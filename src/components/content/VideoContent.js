import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import Navbar from '../shared/Navbar';

const VideoStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function VideoContent() {
  return (
    <VideoStyles>
      <h1>Video Content</h1>
      <Navbar />
    </VideoStyles>
  );
}

export default VideoContent;