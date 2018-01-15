User Panel App.

Features:
- Express as a web server
- Babel for server and client side code
- Webpack to package the client side code to a bundle.js
- React on the client
- Redux for state management
- Jest for testing the javascript code and the example React Components

Testing
- Example of Jest's Snapshot testing feature included
- Example of React app that works with Mock data

Server side rendering
- ReactDOMServer to make the server node respond with an initial html string that represents the exact React application on the client for better performance.

After you download the repo execute in the descriped manner
- yarn | Adds the dependencies
- yarn dev | Initializes the pm2 watcher process
- yarn pm2 logs | To watch the logs

and then from a second console
- yarn webpack | Initializes the webpack watcher process

Usefull commands
- yarn test | to run all existing tests
- yarn pm2 list | shows you the list of open threads
- yarn pm2 delete <thread name> | deletes the thread
so if you need to restart yarn pm2 delete server

The app is running at port 8080
