import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';

const AdminSettingsContentStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function AdminSettingsContent() {
  return (
    <AdminSettingsContentStyles>
      <h1>Settings Content</h1>
    </AdminSettingsContentStyles>
  );
}

export default AdminSettingsContent;