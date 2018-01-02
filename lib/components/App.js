import React from 'react';
import DataApi from '../DataApi';
import { usersData } from '../ReactTask';
import UserList from './UserList';

const api = new DataApi(usersData);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      users: api.getUsers()
    };
  }

  // userActions = {
  //   lookupUser: id => this.state.authors[id]
  // };

  render() {
    return (
      <UserList
        users = {this.state.users}
      />
    );
  }
}

export default App;
