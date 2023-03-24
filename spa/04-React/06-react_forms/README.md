# Form Handling With React

## Content
- [Standard React Project Structure](#standard-react-project-structure).
- [Debugging Tools](#debugging-tools).
- [Handle Forms With React](#handle-forms-with-react).
- [Controlled Component](#controlled-component).

<hr />

## Standard React Project Structure
It's recommended to use the following structure for your React project. So each component will have its own folder and its own `index.jsx` and `style.css` files.
```bash
Root
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Register
│   │       ├── index.jsx
│   │       └── style.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

<hr />

## Debugging Tools
An important tool for debugging is the React Developer Tools. You can install it from [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). it shows the component tree and the props of each component. and also the state of the components.

`consloe.log` is also a good tool for debugging. you can use it to print the props and the state of the components.

log with colors also can be used to make the logs more readable. by using ascii colors. you can use it like this:
```javascript
// try it in console browser...
console.log('%c Hello World', 'color: red; font-size: 20px');
// or
console.log('\u001b[31mHello World\u001b[0m');
```

Read [this](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color) Article for more Info about console colors.

<hr />

## Handle Forms With React
React has a different way to handle forms. it's called `Controlled Component`. it's a component that has its own state. and the state is the source of truth. so when the user types something in the input, the state will be updated. and the input will be updated too. so the state is the single source of truth.

<mark>Important Note:</mark> Make sure to prevent the default behavior of the form. because the default behavior is to send the data to the server. and we don't want that. we want to handle the data in the client side.

Read [this](https://reactjs.org/docs/forms.html) Article for more Info about forms in React.

<hr />

## Controlled Component
A controlled component is a component that has its own state. and the state is the source of truth. so when the user types something in the input, the state will be updated. and the input will be updated too. so the state is the single source of truth.

here is an example of a controlled inputs, Dyanamic Inputs, and a form with a submit button:
```javascript
import React, { useState } from 'react';
const Component_Name = props=>{
    const [name, setName] = useState('');

    const onChange = e => setName({...state, name: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="submit" value="Register" />
        </form>
    );
};
export default Component_Name;
```