import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUserData } from '../store/actions';

class EditUser extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newVal = {
      id: this.props.user.id,
      name: this.refs.name.value,
      email: this.refs.email.value,
      city: this.refs.city.value,
      phone: this.refs.phone.value,
      website: this.refs.website.value,
      companyName: this.refs.companyName.value
    };

    return this.props.dispatch(editUserData(newVal));
  }
  render() {
    return (
      <div className="userEdit-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" defaultValue={this.props.user.name} />
          <input type="text" ref="email" defaultValue={this.props.user.email} />
          <input type="text" ref="city" defaultValue={this.props.user.address.city} />
          <input type="text" ref="phone" defaultValue={this.props.user.phone} />
          <input type="text" ref="website" defaultValue={this.props.user.website} />
          <input type="text" ref="companyName" defaultValue={this.props.user.company.name} />
          <button>Save changes</button>
        </form>
      </div>
    );
  }
}

EditUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

export default connect(
  (state) => {
    return {
      user: state.users[state.activeUser]
    };
  }
)(EditUser);
