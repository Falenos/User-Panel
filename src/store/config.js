import { applyMiddleware, createStore, compose } from 'redux';
import mainReducer from './reducers';

const configure = (initialState) => {
  const isClient = typeof window != 'undefined' && window.document;
  const store = isClient ? createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : createStore(mainReducer, initialState);

  return store;
};
export default configure;
