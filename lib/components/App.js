import React from 'react';
import axios from 'axios';
// const styles = require('./app.scss');
// const css = require('./app.css');
/*
  import now works from the directory,
  but it will also work when state-api in imported as an npm package in production,
  due to path.resolve in webpack.config
*/
import UserList from './UserList';

class App extends React.Component {

  state = this.props.store.getState();

  render() {
    return (
      <UserList
        users = {this.state.users}
        store = {this.props.store}
      />
    );
  }
}

export default App;
