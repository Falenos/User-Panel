import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UserList from './UserList';
import EditUser from './EditUser';

const App = (props) => {
  return (
    <div>
      <UserList />
      {props.activeUser && <EditUser />}
      {props.activeUser && <div className="overlay"></div>}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      activeUser: state.activeUser
    }
  }
)(App);
