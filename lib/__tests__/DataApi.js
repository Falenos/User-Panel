import DataApi from '../DataApi';
import { data } from '../testData';
import { usersData } from '../ReactTask';

const api = new DataApi(data);
const userApi = new DataApi(usersData);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });

  it('exposes users as an object', () => {
    const users = userApi.getUsers();
    const userId = usersData[1].id;
    const userName = usersData[1].name;
    expect(users).toHaveProperty(`${userId}`);
    expect(users[userId].name).toBe(userName);
  });
});
