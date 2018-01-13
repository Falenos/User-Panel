const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_USER_DETAILS':
      return Object.assign({}, state, {
        activeUser: action.userId
      })
    case 'EDIT_USER_DATA':
      return Object.assign({}, state, {
        activeUser: null,
        users: {
          ...state.users,
          [action.value.id]: {
            ...state.users[action.value.id],
            ...action.value
          }
        }
      })
    default:
      return state;
  }
};

export default reducer;
