import React from 'react';
import ReactDOM from 'react-dom';
import StateApi from 'state-api';
import App from 'components/App';

const css = require('styles/index.scss');

const store = new StateApi(window.initialData);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
