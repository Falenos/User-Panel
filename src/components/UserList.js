import React from 'react';
import User from './User';
import { connect } from 'react-redux';

class UserList extends React.Component {

  render() {
    return (
      <div>
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

export default connect(
  (state) => {
    return {
      users: state.users
    }
  }
)(UserList);
