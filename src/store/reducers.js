const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_USER_DETAILS':
      return Object.assign({}, state, {
        activeUser: action.userId
      });
    case 'EDIT_USER_DATA':
      const { id, name, email, city, phone, website, companyName } = action.value;
      // seems a bit streched to user com bine reducer for 2 nested properties, but not sure if this is considered a good practice.
      const newAddress = {
        ...state.users[action.value.id].address,
        city
      };
      const newCompanyDetails = {
        ...state.users[action.value.id].company,
        name: companyName
      };
      const updatadUserData = {
        ...state.users[action.value.id],
        id,
        name,
        email,
        phone,
        website,
        address: newAddress,
        company: newCompanyDetails
      };
      return Object.assign({}, state, {
        activeUser: null,
        users: {
          ...state.users,
          [action.value.id]: updatadUserData
        }
      });
    default:
      return state;
  }
};

export default reducer;
