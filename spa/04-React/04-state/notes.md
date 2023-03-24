# State

- In the simplest terms, a state can be refered to as the memory of the component
- Components often need to change what's on the screen as a result of an interation
  - Typing onto the input field should update the input field
  - Clicking Buy Now button should put a product into the shopping cart
- A component need to remember things, such as current value of input field, current items in the shopping cart etc
- In react, we call this kind of a component-specific memory as state

## Now you might be wondering!

- How to add state to a component?
- How to update the state?
- What happends when we update the state of a component?

## Why a regular variable isn't enough

- Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.
- Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

## To update a component with new data, two things should happen

- Trigger React to render the component with new data (re-rendering).
- Retain the data between renders.

## The solution is to add a state variable

- A state variable retain the data between renders.
- Updating the state variable will trigger React to render the component again

## Meet your first hook!

- In React, useState, as well as any other function starting with ”use”, is called a Hook.
- Hooks, let you 'hook into' different react features
- State is just one of those features, you will meet the other Hooks later.
- When you call useState, you are telling React that you want this component to remember something!
- In our example, we want React to remember the index

**important**

- Hooks can only be called at the top level of your components
- You can’t call Hooks inside conditions, loops, or other nested functions.
- State is isolated and private to the component; in other words, state is local to a component instance on the screen.
- State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen.
