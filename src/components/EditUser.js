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
      <div className='form-container-user'>
        <form className='form-user' onSubmit={this.handleSubmit}>
          <h2>User Details</h2>
          <label className='form-item'>
            Name:
            <input type='text' ref='name' defaultValue={this.props.user.name} />
          </label>
          <label className='form-item'>
            Email:
            <input type='text' ref='email' defaultValue={this.props.user.email} />
          </label>
          <label className='form-item'>
            City:
            <input type='text' ref='city' defaultValue={this.props.user.address.city} />
          </label>
          <label className='form-item'>
            Phone:
            <input type='text' ref='phone' defaultValue={this.props.user.phone} />
          </label>
          <label className='form-item'>
            Website:
            <input type='text' ref='website' defaultValue={this.props.user.website} />
          </label>
          <label className='form-item'>
            Company:
            <input type='text' ref='companyName' defaultValue={this.props.user.company.name} />
          </label>
          <button type='submit' className='button' data-primary={true} >Save changes</button>
        </form>
      </div>
    );
  }
}

EditUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string
    })
  })
};

export default connect(
  (state) => {
    return {
      user: state.users[state.activeUser]
    };
  }
)(EditUser);
