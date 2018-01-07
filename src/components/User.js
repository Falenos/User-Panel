import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const { user, store } = props;
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
}

export default User;