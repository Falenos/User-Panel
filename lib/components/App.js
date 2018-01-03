import React from 'react';
import axios from 'axios';
/*
  import now works from the directory,
  but it will also work when state-api in imported as an npm package in production,
  due to path.resolve in webpack.config
*/
import DataApi from 'state-api';
import { usersData } from 'ReactTask';
import UserList from './UserList';

const api = new DataApi(usersData);

class App extends React.Component {

  state = {
    users: this.props.initialData
  };

  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      users: api.getUsers()
    }));
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
