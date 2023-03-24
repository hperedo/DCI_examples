# Color Picker

A simple color picker In React using State.

## 1. Create an empty React app from scratch




## 2. Create a new component called `ColorPicker`.
    1- in colorPicer component create div with width and height 200px and border 1px solid black.
    2- create one range slide input with label `red`, min is 0, max is 255, step is 1, value is 0.
    3- create one range slide input with label `green`, min is 0, max is 255, step is 1, value is 0.
    4- create one range slide input with label `blue`, min is 0, max is 255, step is 1, value is 0.
    5- create a new state object with three properties `red`, `green`, `blue` and set their values to 0.
## 3. Define a state:
> color, setColor, initialize state:
```js
    {
        red: 0,
        green: 0,
        blue: 0
    }
```

## 4. Set input values:
    1- Assign the `red` input value to the `red` state value.
    2- Assign the `green` input value to the `green` state value.
    3- Assign the `blue` input value to the `blue` state value.

## 5. Add event listeners to the inputs:
    1- Add an `onChange` event listener to the `red` input.
    2- Add an `onChange` event listener to the `green` input.
    3- Add an `onChange` event listener to the `blue` input.

## 6. Define Handlers:
    1- Define a `handleRedChange` function, which takes an event as an argument, and sets the `red` state value to the event target value. **This should change only the `red` property from state state value.**
    2- Define a `handleGreenChange` function, which takes an event as an argument, and sets the `green` state value to the event target value. **This should change only the `green` property from state state value.**
    3- Define a `handleBlueChange` function, which takes an event as an argument, and sets the `blue` state value to the event target value. **This should change only the `blue` property from state state value.**


