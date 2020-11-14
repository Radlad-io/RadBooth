import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';

const AdminInfoContentStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function AdminInfoContent() {
  return (
    <AdminInfoContentStyles>
      <h1>Info Content</h1>
    </AdminInfoContentStyles>
  );
}

export default AdminInfoContent;