<h1 align="center">Express Routes</h1>


<p align="center"> Getting Started with Express Routes.
    <br> 
</p>

## 📝 Table of Contents
- [What are Routes in Express.](#what-is-middleware)
- [Create Routes](#create-routes)
- [Router Object in Express](#limitations)
- [Route Path](#route-path)
- [Route Methods](#route-methods)
- [Route Parameters](#route-parameters)
- [Route Query](#route-query)
- [Response Methods](#response-methods)
- [Destrucuring from Libraries](#destrucuring-from-libraries)
- [Resources](#resources)

---

## 🧐 What are Routes in Express


A route in Express.js is a mapping between an HTTP verb (e.g. GET, POST, PUT, DELETE) and a callback function that will be executed whenever a request with the specified verb and URL pattern is received. The URL pattern can contain variables that can be dynamically populated based on the incoming request, allowing you to create dynamic URLs.

Here is an example of how you can define a simple route in Express.js:


```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

In this example, the `app.get` method maps a GET request to the root URL (i.e. "/") to a callback function that sends the text "Hello World!" back to the client.

---

## Create Routes

The recommended way to create routes in express, is to make a separate file for each route, and then import them into the main app file.

This separation of concerns makes it easier to maintain your codebase, and also makes it easier to test your routes.

For example, if you want to create a route for handling user requests, you can create a file called `user.js` and define your routes in that file:

```javascript
import { Router } from 'express';
const router = Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

export default router;
```

Then, in your main app file, you can import the route and use it:

```javascript
import userRoute from './routes/user.js';

// for all routes starting with /users
// any method (GET, POST, PUT, DELETE, etc.)
app.use('/users', userRoute);
```

So the project tree would look like this:

```bash
├── app.js
├── routes
│   └── user.js
└── package.json
```

---

## Router Object in Express

The `Router` object is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

```javascript
import { Router } from 'express';
const router = Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.route('/').get(function (req, res) {
  res.send('Birds home page');
}).post((rew, res)=>{
  res.send('Birds post page');
}).put((rew, res)=>{
  res.send('Birds put page');
}).delete((rew, res)=>{
  res.send('Birds delete page');
});

export default router;
```

So in general speaking:
```javascript
router.route('/SOME_PATH').METHOD(/*HANDLER*/).METHOD(/*HANDLER*/).METHOD(/*HANDLER*/);
```
---

## Route Path 

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be: 
- strings.
- string patterns.
- regular expressions.

### String

```javascript
app.get('/about', function (req, res) {
  res.send('about');
  // URL: /about
});
```

### String Patterns

```javascript
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
  // URL: /abcd, /acd 
});
```

### Regular Expressions

```javascript
app.get(/a/, function (req, res) {
  res.send('/a/');
  // URL: /a, /ab, /abc, /abcd, /abcde, ...
});
```

---

## Route Methods

A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```javascript
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

---

## Route Parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
  // URL: /users/34/books/8989
  // req.params: { "userId": "34", "bookId": "8989" }
});
```

---

## Route Query

Route query is a part of the URL that comes after the question mark (?), and includes field=value pairs. Route queries are separated by ampersands (&). The following code is an example of a route with a route query.

```javascript
app.get('/search', function (req, res) {
  res.send(req.query);
  // URL: /search?q=express
  // req.query: { "q": "express" }
});
```

---

## Response Methods

The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

| Method | Description |
| --- | --- |
| res.download() | Prompt a file to be downloaded. |
| res.end() | End the response process. |
| res.json() | Send a JSON response. |
| res.jsonp() | Send a JSON response with JSONP support. |
| res.redirect() | Redirect a request. |
| res.render() | Render a view template. |
| res.send() | Send a response of various types. |
| res.sendFile() | Send a file as an octet stream. |
| res.sendStatus() | Set the response status code and send its string representation as the response body. |

---

## Morgan Middleware

Morgan is a HTTP request logger middleware for node.js. It simplifies the process of logging requests to your application.

```javascript
import morgan from 'morgan';

app.use(morgan('dev'));
```

---

## Destrucuring from Libraries

```javascript
import { Router } from 'express';
import {log} from 'console';

const router = Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
  // we can use log() from console library
  log('Hello World!');
});
export default router;
```

---

## Resources

- [Express.js](https://expressjs.com/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express.js Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)


---

## Author

- [Mostafa Othman](https://github.com/mostafa-dci).

---
