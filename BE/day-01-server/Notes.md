# Backend - Server - day 1


 ## Introduction

 - The server as a program (service/daemons) 
  - A program running in the background
  - You don't have a direct GUI or CLI for the program
  - You don't really interface with them / control them directly
  - You might have configuration files though


  - Graphic User Interface
  - Command line  Interface

  - Server-client

## HTTP: a server is a command line program

- Listening for requests and Responding

- You can create a server with just pure **Node**
  - That's rarely done with pure Node

- There are tools that help, we will use Express
  - The "E" in the "MERN" stack
  
  ## Live coding

- Creating a Node app with Express

- An endpoint looks like this 

  - `app.get(<path>, <controller>)`

  - Sometimes these functions that handle requests are called "controllers"

    - They are not really a controllers
    - I personally DO NOT like this term


- Some people use the term MVC for full stack applications
  - Where React is the View
  - Expresss is the Controller
  - MongoDB (Mongoose) is the Model
