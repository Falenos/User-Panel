import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import { connect } from 'react-redux';

class UserList extends React.Component {

  render() {
    return (
      <div className='grid'>
        {Object.values(this.props.users).map(user =>
          <User
            key={user.id}
            user={user}
          />
        )}
      </div>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.object
};

export default connect(
  (state) => {
    return {
      users: state.users
    };
  }
)(UserList);
