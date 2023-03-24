# Querying & Filter

> Create a new file `task.js` and import `mongoose`, `dotenv` and `students.js`;
> Create the connection to `dci` database.

## Tasks
> Send the following queries:

1. `SELECT name From students WHERE address.state = "Rhineland-Palatinate";`
    - *You Should Got 8 Students.*
2. `SELECT name, age FROM students WHERE age = 26;`
    - *You Should Got 12 Students.*
3. `SELECT name FROM students WHERE name LIKE 'jo';`
    - *You Should Got 2 Students.*
4. `SELECT address.state FROM students ORDER BY address.state ASC;`
    - *You Should Got array of addresses sorted by `state`.*
5. `SELECT name, age FROM students WHERE address.state = "North Rhine-Westphalia" AND age = 26;`
    - *You Should Got 4 Students.*
6. `SELECT * FROM students WHERE skills.skill = "PHP";`
    - *You Should Got 22 Students.*
7. `SELECT name, age FROM students WHERE age > 27;`
    - *You Should Got 14 Students.*
8. `SELECT name, age FROM students WHERE age <=19;`
    - *You Should Got 23 Students.*