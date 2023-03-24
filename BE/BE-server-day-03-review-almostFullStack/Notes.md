# Backend - Server - day 3
## 26-jan-2023

## What is a backend?
- Analogy: Amazon
- Amazon waits for request detailing what clients want
- Amazon processes the requests and sends responses


## An example: Using the GitHub API


- From the point of view of the Client (Frontend; Browser)
  1. you send a request to the GitHub API
  2. you reclieve a response back



- From the point of view of the Server (Backend; API)
  1. you receive a request from the client
  2. you send a response back

## HTTP requests so far GET and POST

 - Get request is almost always is for getting data 
 - Post request is always for creating or sendng data 

- Servers can also act as a client requesting resources from other servers


- We always have a client and a server

  - A full stack developer might develop both parts
  - Our server will be a NodeJS application that uses tools like Express
  - The client is traditionally a browser

    - BUT the client is anything that can send a request
    - Browser
    - cURL
    - REST Client
    - Postman
    - Even our backend NodeJS application can make requests and act as a client

    ## Live code Weather WITH A FRONTEND app as an example



- CORS

  ```txt

    CORS / Cross Origin Resource Sharing
    - When you are on one site, accessing another site -- this might block the request!

  ```
