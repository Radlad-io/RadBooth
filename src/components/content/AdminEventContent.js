import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';

const AdminEventContentStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function AdminEventContent() {
  return (
    <AdminEventContentStyles>
      <h1>Event Content</h1>
    </AdminEventContentStyles>
  );
}

export default AdminEventContent;