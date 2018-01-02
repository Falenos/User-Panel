import React from 'react';
import User from './User';

const UserList = (props) => {
  return (
    <div>
      {Object.values(props.users).map(user =>
        <User
          key = {user.id}
          user = {user}
        />
      )}
    </div>
  );
};

export default UserList;
