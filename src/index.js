import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-76yek2cr.us.auth0.com"
    clientId="CtfzatrkgfJ24KTmMA91RkZsQcCPOO9D"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
