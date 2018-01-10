export var openUser = (userId) => {
  return {
    type: 'OPEN_USER_DETAILS',
    userId
  }
}

export var editUserData = (field, value) => {
  return {
    type: 'EDIT_USER_DATA',
    field: value
  }
}
