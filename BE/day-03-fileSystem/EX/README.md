# File System Tasks

## Task 1
> require: `fs`, `Math.random`, `arrays methods`, `JSON methods`


in [app.js](./app.js) File, there is two arrayes, `firstNames` and `lastNames`;

1. Generate an json object (array of objects) contains 10 objects with following data for each object:
  ```json
  [
    {
      "firstName": "RANDOM_FROM_FIRSTNAMES_ARRAY",
      "lastName": "RANDOM_FROM_LASTNAMES_ARRAY",
      "age": "RANDOM_NUMBER_BETWEEN_18_70"
    },{
      ...
    },....
  ]
  ```

2. Store that object in `users.json` file.
    - the file `users.json` should be in [`EX`](./) directory (same root folder with app.js)
    - Use `fs` to write file.
    - make sure to write this json object as a string.
3. Check if the file `users.json` is created.

<hr/>

## Task 2
> require: `process.argv`,`fs`, `arrays methods`, `JSON methods`

Create a new file `adduser.js`:
1. this file should accept three arguments: `firstName`, `lastName`, `age`
2. create a new object according to this arguments.
3. read the file `users.json` and convert the data from it to object (JSON.parse()/JSON.stringify())
4. append the new object that you already created into the data that you read it from file
5. write this json object again to the file
6. if errors log that errors.
7. if success log `a new user has been added successfuly`

<hr />

## Task 3

> require: ` process.argv`,` fs`, ` arrays methods`, ` JSON methods`

create a new file `search.js`:

1. this file should accept one argument: `firstName`.
2. read the data from `users.json` and convert it to object.
3. find the user wich has same `firstName` argument.
4. if exist, log that user.
5. if not exist, log `user {firstName} not found :(`


<hr />

## Task 4 (Bonus)
create a new file `deleteUser.js` to delete a specific user by firstName and lastName, from arguments to that file, and make sure the changes in `users.json`

example:
```bash
  node deleteUser.js John Smith
  # output:
  user (John Smith) was deleted successfuly
  # check the file "users.json" if the user still exist.
```