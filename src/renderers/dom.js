import React from 'react';
import ReactDOM from 'react-dom';
import StateApi from 'state-api';
import App from 'components/App';
import Welcome from 'components/Welcome';

const css = require('styles/index.scss');

const store = window.initialData && new StateApi(window.initialData);

if (window.location.pathname === "/") {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}
