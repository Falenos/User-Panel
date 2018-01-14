import React from 'react';
import axios from 'axios';
/*
  import now works from the directory,
  but it will also work when state-api in imported as an npm package in production,
  due to path.resolve in webpack.config
*/
import DataApi from 'data-api';
import ReactDOMServer from 'react-dom/server';
import config from 'config';
import configure from 'store/config';
import { Provider } from 'react-redux';

import App from 'components/App';
import Landing from 'components/Landing';

// TODO solve issues of SSR and style loaders
// const css = require('app.scss');

const serverRender = async (path) => {

  if (path === "landing") {
    return {
      landingMarkup: ReactDOMServer.renderToString(
        <Landing />
      )
    };
  }

  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const data = new DataApi(resp.data).getData();
  const store = configure(data);

  // the initialData are returned from the server to avoid the network operation neseccary to fetch them to the client side
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store} >
        <App />
      </Provider>,
    ),
    initialData: store.getState()
  };
};

export default serverRender;
