import React from 'react';
import UserList from '../UserList';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configure from '../../store/config';


describe('UserList', () => {

  const testProps = {
    users: {
      a: {id: 'a'},
      b: {id: 'b'}
    }
  };
  const store = configure(testProps);

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <UserList />
      </Provider>
    ).toJSON();

    expect(tree.children.length).toBe(2);

    expect(tree).toMatchSnapshot();
  });

});
