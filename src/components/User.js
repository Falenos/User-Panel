import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openUserEdit } from '../store/actions';

const User = (props) => {
  const { user, store } = props;
  return (
    <div onClick={() => {
      props.dispatch(openUserEdit(user.id))
    }}>
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

export default connect()(User);
