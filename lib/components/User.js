import React from 'react';

const User = (props) => {
  const { user, actions } = props;
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
    </div>
  );
};

export default User;
