import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserList from './UserList';
import EditUser from './EditUser';

const App = (props) => {
  return (
    <div>
      <UserList />
      {props.activeUser && <EditUser />}
      {props.activeUser && <div className='overlay'></div>}
    </div>
  );
};

App.propTypes = {
  activeUser: PropTypes.number
};

export default connect(
  (state) => {
    return {
      activeUser: state.activeUser
    };
  }
)(App);
