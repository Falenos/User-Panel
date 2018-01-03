import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ReactDOMServer from 'react-dom/server';
import config from 'config';

import App from 'components/App';

const serverRender = async () => {

  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  const initialData = api.getUsers();

  return ReactDOMServer.renderToString(
    <App initialData={initialData}/>
  );
};

export default serverRender;
