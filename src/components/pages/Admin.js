import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import Adminbar from '../shared/Adminbar';
import AdminInfoContent from '../content/AdminInfoContent';
import AdminCameraContent from '../content/AdminCameraContent';
import AdminEventContent from '../content/AdminEventContent';
import AdminSettingsContent from '../content/AdminSettingsContent';

const AdminLayoutStyles = styled.nav`
h1 {
  color: black;
}

p {
  color: black;
}
`;

function AdminLayout() {
  return (
    <AdminLayoutStyles>
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/admin" component={AdminInfoContent} />
          </div>
          <div className="content">
            <Route path="/admin/camera" component={AdminCameraContent} />
          </div>
          <div className="content">
            <Route path="/admin/event" component={AdminEventContent} />
          </div>
          <div className="content">
            <Route path="/admin/settings" component={AdminSettingsContent} />
          </div>
        </div>
      </HashRouter>
      <Adminbar />
    </AdminLayoutStyles>
  );
}

export default AdminLayout;