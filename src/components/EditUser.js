import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUserData } from '../store/actions';

class EditUser extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    var newVal = {
      id: this.props.user.id,
      name: this.refs.name.value
    }

    return this.props.dispatch(editUserData(newVal));
  }
  render() {
    return (
      <div className="userEdit-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" defaultValue={this.props.user.name} />
          <button>Save changes</button>
        </form>
      </div>
    );
  }
};

EditUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
}

export default connect(
  (state) => {
    return {
      user: state.users[state.activeUser]
    }
  }
)(EditUser);
