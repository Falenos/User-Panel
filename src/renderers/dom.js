import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import StateApi from 'state-api';
import App from 'components/App';
import Welcome from 'components/Welcome';

const css = require('styles/index.scss');

const reducer = function(state, action) {
  if (action.type === 'INC') {
    return state = state + action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState())
});

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 11});
store.dispatch({type: 'INC', payload: 12});
store.dispatch({type: 'INC', payload: 133});

const storeOld = window.initialData && new StateApi(window.initialData);

if (window.location.pathname === "/") {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <App store={storeOld} />,
    document.getElementById('root')
  );
}
