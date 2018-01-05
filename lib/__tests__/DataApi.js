import StateApi from 'state-api';
import { usersData } from '../ReactTask';

const userApi = new StateApi(usersData);

describe('StateApi', () => {

  it('exposes users as an object', () => {
    const users = userApi.getState().users;
    const userId = usersData[1].id;
    const userName = usersData[1].name;
    expect(users).toHaveProperty(`${userId}`);
    expect(users[userId].name).toBe(userName);
  });

});
