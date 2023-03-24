# Backend - Database Basics - Day 2

- Last time we did
  - some mongo shell commands ,



  ## pre start of the day QUIZ!

  - What is a CLI?

  - Command Line Interface

- MongoDB uses a client-server model. What is the client, what is the server?

 - Client :   mongo shell with the `mongo` or `mongosh` program
 - Server :   mongodb server/service (mongod) or MongoDB Atlas

 ### what is SQL and NoSQL databases ???!!
  - SQL :   save data in   tables and they are relational data basaes uses for big very big projects!!!
  -  NoSQL  (mpogodb) :  save dataa in BSON (kind of JSON)  , none-relational data bases .

  - When we say MongoDB is "Document based" - what is a document?
     - A BSON object in a collection

     - What is an ObjectID?
  - A unique, automatically added identifier (string) in a document
- ObjectIDs are cool! They look like this: `507f191e810c19729de860e3`
                                      - `507f191e___810c19729d___e860e3`
  > a 4-byte timestamp value, representing the ObjectId's creation, measured in seconds since the Unix epoch

  > a 5-byte random value
  > a 3-byte incrementing counter, initialized to a random value
- https://www.mongodb.com/docs/manual/reference/method/ObjectId/

- ObjectIDs are automatically added to inserted documents in the `_id` field


- What is "MongoDB Atlas"?

  - A cloud service serving us access to an online MongoDB database, managed by MongoDB (the company)


- Yesterday we used a connection string, what was it?

  - An address very similar to an URL (because it's an URL!) to connect us to a server

- In the MongoDB shell, how can I find out what is the currently selected database?
  - `db`



## A word on security: users and firewall
- Usually you'll connect to a server using a username and password
- Our local servers that don't ask for a username/password are not secured
- Actual servers SHOULD have firewalls in addition to username/password authentication


- LETS DO SOME CODING :) finally !!