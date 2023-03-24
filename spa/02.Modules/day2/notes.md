# SPA - Modules - day2

Last day we talked about

- Modules
  - named exports
  - default exports
  - imports

Today, we will learn

- Transpiling & Bundling
- NPM dependencies

# Transpiling & Bundling

- Not all browsers support Modules
- Mainly IE11 doesn't
- Let's hope we don't have to support IE11

- There might be other things as well that we want to use but only a few browser versions support
- In that case we can make use of Transpilation
- Traspilation is basically taking code and changing it into different, but similar
  - Like SCSS to CSS

## Babel

- There are many tools to transpile JS, one of the most popular ones is called Babel
- Babel says it's a compiler; transpliation is a type of compilation

- https://babeljs.io/repl

  1. let foo = "foo"; // ES 2015
  2. change targets; remove IE11 part
  3. let foo = (x) => console.log(x);

- Depending on settings, Babel will compile your code down to different versions
- You kind of have to decide which target to support

## NodeJS Refresh

- To have a proper NodeJS project, you need to run `npm init`
- This creates a `package.json` file that describes your project

## Babel example

<!-- Install babel -->

- npm i babel-cli babel-core babel-preset-env

# Bundling

- https://webpack.js.org/
- Webpack is like a MEGA version of babel, capable of multiple languages and file formats.
- Can do much more than transpile
- Can and does use Babel in the background
- Webpack can take our code, transpile it and bundle it up into neat little files
- These Bundled files load faster than our source files

- Webpack is run using node, but the output doesn't have to be run with node
- Example project from scratch again

<!-- Install webpack-cli  -->

- npm i -g webpack-cli @webpack-cli/generators

<!-- Initialize a webpack project -->

- webpack-cli init

# Npm workflow

- Adding modules to our project

- Initialize a webpack project
- Install the package/module (in this case moment.js)
- Import it in our JS modules and start using it
- Always check the documentation to see how to use a module
