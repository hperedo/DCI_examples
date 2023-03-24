
# SPA - Component - Day 2



- Review
## Data flow 1


 PROPS
  - Example
    - Passing props
      - `<Alert message="This is a test" type="warning" />`
      - `<Alert message="This is a test" type="info" />`
    - Accepting props with a "prop" property which is an object


- Today we will look at state and events


- State

- The most central thing in React (according to Jay)
- State - The state of your application or the state of a component of your application


  - Examples of state

      - Menu component -> Is the menu open

    - Chatbox component -> Is the chat open
    - Chatbox component -> Are there any chat messages in the chat

    - Searchbar component -> Is anything written in the search bar

    - Searchbar component -> Is the search bar currently doing a search


- IMHO State is not super well defined or demonstrated in the official React docs


- Rule: Do not edit state variables directly
```js
   
   let sth= true

    sth = false


```


- We initialize and update state with the `useState` Hook



## Interaction


- You set event handlers in JSX kind of like inline event handlers work in HTML

  - Like with regular events, React has an Event object

    - This actually is an expanded version of the regular event object

    - We have e.value and I think even e.target if needed

  - It's extremely common to update state in event handlers



## Let's code!!
