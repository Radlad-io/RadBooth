import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import Navbar from '../shared/Navbar';


const GIFStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function GIFContent() {
  return (
    <GIFStyles>
      <h1>GIF Content</h1>
      <Navbar />
    </GIFStyles>
  );
}

export default GIFContent;