import React from 'react';
import ReactDOM from 'react-dom';
// import DataApi from 'data-api';
import App from 'components/App';
import Landing from 'components/Landing';
import configure from 'store/config';
import { Provider } from 'react-redux';

const css = require('styles/index.scss');

if (window.location.pathname === "/") {
  ReactDOM.render(
    <Landing />,
    document.getElementById('landing')
  );
} else {
  // const storeOld = window.initialData && new DataApi(window.initialData);
  const store = configure(window.initialData);

  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
