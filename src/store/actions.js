export var openUserEdit = (userId) => {
  return {
    type: 'OPEN_USER_DETAILS',
    userId
  }
}

export var editUserData = (newData) => {
  return {
    type: 'EDIT_USER_DATA',
    value: newData
  }
}
