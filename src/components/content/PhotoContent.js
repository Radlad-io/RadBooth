import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import Navbar from '../shared/Navbar';


const PhotoPageStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function PhotoPage() {
  return (
    <PhotoPageStyles>
      <h1>Photo Content</h1>
      <Navbar />
    </PhotoPageStyles>
  );
}

export default PhotoPage;