<h1 align="center">Fullstack App With Express & React</h1>

<p align="center">Getting started to build a fullstack app with Express and React & Deploying.
</p>

## 📝 Table of Contents

- [Server Side Development](#server-side-development)
- [Frontend Development](#frontend-development)
- [Combining the Server and the Client](#combining-the-server-and-the-client)


---

## Server Side Development

1. Create a new folder for the server side code. In this folder, in that Folder, execute the following command to create a new package.json file:

```bash
npm init -y
```
2. Change ```"main": "index.js"``` to ```"main": "server.js"``` in `package.json` file.

3. Add `"type"`: `"module"` to `package.json` file, so that we can use ES6 modules in our code.
 

4. Add Start Command to package.json file, so we can run the server using `npm start` command.

So, the `package.json` file should look like this:

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```

5. Install the following dependencies:

```bash
npm install express dotenv cors morgan
```

6. Create a new file named `.env` in the root folder of the server side code. Add the following code to the file:

```bash
# Setting the port number:
PORT=5000
# All other environment variables ...
```

7. Create a new file named `server.js` in the root folder of the server side code. Add the following code to the file:

```js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Initialize the app
const server = express();

// Load environment variables
dotenv.config();

// Middlewares
// Allowing CORS for all requests, (for development purposes ONLY)
server.use(cors());
// Logging requests to the console, (for development purposes ONLY)
server.use(morgan('dev'));
// Parsing the request body, (for post requests) so we can access it in req.body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Routes
/* 
  All the routes will be imported here and used here.
  For example:
  server.use('/api/v1/users', users);
*/

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Backend Ready On: \t http://localhost:${PORT}`);
});
```


## Frontend Development

1. Create a new folder `frontend` OUTSIDE `backend` folder. This folder, will contain `React` project.

2. In the `frontend` folder, execute the following command to create a new React App:

```bash
npx create-react-app .
```

3. Add `"proxy": "http://localhost:5000"` to `package.json` file, so that we can make requests to the server using relative paths. For example, if we want to make a request to `http://localhost:5000/api/v1/users`, we can just make a request to `/api/v1/users` and the proxy will forward the request to the server. ---Make sure that the port number in the proxy is the same as the port number in the server side code in `.env` file.--- 
**Note:** This is only for development purposes.

---

Then we can start the server and the client, and start to develop both the server and the client side code.

---

## Combining the Server and the Client

After finishing the development of both the server and the client side code, we need to combine them together.

1. In frontend:
    1. Remove "proxy": "http://localhost:5000" from `package.json` file.
    2. Add `"homepage": "."` to `package.json` file, so that we can use relative paths in the client side code.
    2. Execute the following command to build the client side code:
      ```bash
        npm run build
      ```

2. In backend:
    1. Create a new folder `public` in the root folder of the server side code.
    2. Remove development tools in `server.js` file:
      ```js
        // Allowing CORS for all requests, (for development purposes ONLY)
        //server.use(cors());
        // Logging requests to the console, (for development purposes ONLY)
        //server.use(morgan('dev'));
      ```
    3. Recommended: uninstall development tools:
      ```bash
        npm uninstall cors morgan
      ```
    4. Add the following code to `server.js` file:
      ```js
        // Serve static files from the React frontend app
        server.use(express.static(`${process.argv[1]}/public`));

        // Anything that doesn't match the above, send back index.html (React Stuff)
        server.get('*', (req, res) => {
          res.sendFile(`${process.argv[1]}/public/index.html`);
        });
      ```
    5. Copy the `build` folder from the `frontend` folder to the `public` folder in the `backend` folder.
    6. Then we just need to start the server only.