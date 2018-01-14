import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openUserEdit } from '../store/actions';

const User = (props) => {
  const { user, store } = props;
  return (
    <div className="grid-item" onClick={() => {
      props.dispatch(openUserEdit(user.id))
    }}>
      <div className="grid-item-header">
        <div>{user.name}</div>
      </div>
      <div className="grid-item-content">
        <div>{user.email}</div>
        <div>{user.address.city}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
        <div>{user.company.name}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

export default connect()(User);
