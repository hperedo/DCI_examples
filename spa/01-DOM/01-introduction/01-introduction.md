# The `window` object

> The Window interface represents a window containing a DOM document; the document property (property of the global window object) points to the DOM document loaded in that window.

> https://developer.mozilla.org/en-US/docs/Web/API/Window

## Native objects vs Host objects vs User objects

- Native objects are fully defined by the ECMAScript specification

  - So these are kind of supplied by JavaScript (ECMAScript) itself
  - Date
  - Math
  - parseInt

- Host objects

  - Specific implementation of these is defined by the environment
    - Meaning the browser, NodeJS or other
    - Supplied by the environment your code runs in
  - window
  - document

- User objects

  - This term is not used very often
  - We can define our own stuff too! Like `class Book {}` :)

## The window object built in logic

- Example things that work in the browser in the global (window) scope

  // The old JavaScript message box
  window.alert("Hello world!");

  // Because "window" is the global scope, we can also just do
  alert("Hello browser");

  // The old prompt
  const answer = prompt("Whats yer name, traveller?");
  console.log(answer);

- Not used much, because they are not UX-friendly
- OK to use until you find better options :)

# APIs

- Application Programming Interface
- Interface is the key word here
- LOTS of them exist and developers can make custom ones too
- APIs exist between programs, between libraries, between computers
  - Between basically any two concepts that communicate digitally
- Some are APIs built into the browser
- Other APIs are given by for example companies like Facebook
- An API is like the interface between some internal logic, and some external thing that wants access to that logic
- The API defines how external things can communicate with internal things
- Details and complexity of the internal thing remains hidden

- For example 'Geolocation API'

# DOM - Document Object Model

- DOM or Document Object Model is an object-oriented representation of a web page
- When a browser opens an HTML file, internally it builds a document object based on that HTML file

- Object oriented

  - Elements (like `<a>`) are objects
  - Element attributes (like href) are objects
  - Even the text content of an element is represented with an object

# Add scripts to an HTML document

- To work with the document object and other APIs, we need to get our scripts inside the web page
- Loading a JavaScript file into the browser is like loading a CSS file
- This is generally the recommended and best method (fastest)

    <script src="js/index.js">


- Also you can work inline like with CSS

    <script>
        console.log("Hello");
    </script>

- Often script tags are located at the end of the body
  - This is to ensure that all elements have been loaded before running the JS code
  - We will come back to this
- For now, let's use just one JS file always

- Differences between running code inside NodeJS and running it in the browser
  - NodeJS doesn't have any graphical capabilities
  - NodeJS doesn't know anything about HTML, DOM or the browser window
  - Global objects like console and Math works pretty much the same way in both of them
  - JS in the browser is actually run inside (in the context of) a global window object
