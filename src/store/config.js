import { createStore, compose } from 'redux';
import reducer from './reducers';

const configure = (initialState) => {
  const isClient = typeof window != 'undefined' && window.document;
  const store = isClient ? createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : createStore(reducer, initialState);

  return store;
};
export default configure;
