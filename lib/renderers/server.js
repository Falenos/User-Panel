import React from 'react';
import axios from 'axios';
import StateApi from 'state-api';
import ReactDOMServer from 'react-dom/server';
import config from 'config';

import App from 'components/App';

// TODO solve issues of SSR and style loaders
// const css = require('app.scss');

const serverRender = async () => {

  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  // the initialData are returned from the server to avoid the network operation neseccary to fetch them to the client side
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data
  };
};

export default serverRender;
