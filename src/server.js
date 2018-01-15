import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { usersData } from 'ReactTask';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const landingContent = await serverRender('landing');
  res.render('landing', { ...landingContent });
});

app.get('/users', async (req, res) => {
  const initialContent = await serverRender('users');
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(usersData);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
