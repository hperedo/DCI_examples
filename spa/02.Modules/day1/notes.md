# SPA - Modlues - day1

Last day we talked about - Various Events - Event propagation - Event Delegation

Today we are gonna talk about modlues..

## Introduction

- Code organisation is vital in maintaining the application
- There are rules, conventions and logics about how a project is structured
- For example, all images in one folder, CSS in another and JS in yet another folder etc
- Often, the JS code is divided into modules

## Module Basics

- One of the issues of having lots of JS code is the potential naming collision
  - what if two JS files both use a global variable "user"?
  - or the same helper function "getFirst()"?
- The solution is scope isolation
  - That is to isolate the scope and only 'reveal' what we want to
  - Encapsulating all of the details and complexities
- Before we go into _actual_ modules, there is one method that we can take a look at

## IIFE : A brief overview

- Oldschool
- IIFE = Immediately invoked function expression
- There are a bunch of ways to do it, here is one quick way
- Don't use this method and don't bother to code along as well

# The Module pattern as it is sometone called

The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.

We expose certain properties and function as public and can also restrict the scope of properties and functions within the object itself, making them private.

Advantages of scope isolation and encapsulation

- Module Patterns enable better maintainability since all the related code can be encapsulated inside a single logical block. These logically independent blocks are relatively easier to update.
- A single unit of code can be reused across the entire application. Functionality enclosed as a module can be reused and we do not need to define the same functions at multiple points.

- Basically

  - Having isolated bits of code makes the bits of code easier to maintain
  - Having isolated bits of code makes the bits of code easier to copy
  - Having isolated bits of code makes the project easier to divide
  - Ecapsulation hides the complexity of parts of code

- Modules are awesome for this
- JS divided into modules often use .mjs for the file extension instead of .js
- You use modules slightly differently than other js in the browser
- Please Code along with me for this

### Using modules in the browser

We need to tell the browser that we are using modules:

```htm
<script src="index.js">
<script type="module" src="index.js">
```
