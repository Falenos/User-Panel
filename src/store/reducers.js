// import { createStore } from 'redux';

// const reducer = function(state, action) {
//   if (action.type === 'INC') {
//     return state = state + action.payload;
//   }
//   return state;
// }

// const store = createStore(reducer, 0);

// store.subscribe(() => {
//   console.log('store changed', store.getState())
// });

// store.dispatch({type: 'INC', payload: 1});
// store.dispatch({type: 'INC', payload: 11});
// store.dispatch({type: 'INC', payload: 12});
// store.dispatch({type: 'INC', payload: 133});


const mainReducer = (state = {a: 1}, action) => {
  switch (action.type) {
    case 'EDIT_NAME':
      return Object.assign({}, state, {
        name: action.newValue
      })
    case 'EDIT_EMAIL':
      return Object.assign({}, state, {
        email: action.newValue
      })
    case 'EDIT_ADDRESS':
      return Object.assign({}, state, {
        address: action.newValue
      })
    case 'OPEN_USER_DETAILS':
      return Object.assign({}, state, {
        activeUser: action.userId
      })
    case 'EDIT_USER_DATA':
      return Object.assign({}, state, {
        address: action.value
      })
    default:
      return state;
  }
};

export default mainReducer;
