import DataApi from 'data-api';
import { usersData } from '../ReactTask';

const userApi = new DataApi(usersData);

describe('DataApi', () => {

  it('exposes users as an object', () => {
    const users = userApi.getData().users;
    const userId = usersData[1].id;
    const userName = usersData[1].name;
    expect(users).toHaveProperty(`${userId}`);
    expect(users[userId].name).toBe(userName);
  });

});
