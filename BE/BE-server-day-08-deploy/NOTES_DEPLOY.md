## To start Deploy React-express
1. Front-end side:
    1. DELETE `proxy` from `package.json` in front-end application.
    2. Run This Command in front-end (react): `npm run build`.

2. Server Side:
    1. create a folder in root of backend `public`.
    2. In entry file `server.js`, make public folder accessible for any browser
    3. Move entire content of `build` folder which is in `frontend`, to public,
    4. Make a response for all `GET` requests, index.html in public. AT THE END BEFORE LISTENING
    5. make sure to remove/disable cors in `server.js`
    6. Delete All development tools, morgan, cors: `npm uninstall morgan cors` 