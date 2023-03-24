# Routing In React

## Content
- [What is Routing](#what-is-routing)
- [Client Side Routing](#client-side-routing)
- [Getting Started with React Routing](#getting-started-in-react-routing)
- [Link, Navigate In React](#link-navigate-in-react)
- [Redirecting in React](#redirecting-in-react)
- [General URL Case (404/No Content Found)](#general-url-case)
- [Params In React Router Dom](#params-in-react-router-dom)
- [Query in React Router Dom](#query-in-react-router-dom)


<hr/>

## What is Routing
In web application, Routing is a process of binding a web URL to a specific resource in the web application. In React, it is binding an URL to a component. React does not support routing natively as it is basically an user interface library.

<hr/>

## Client Side Routing
In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

> Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

<hr/>

## Getting Started in React Routing
Let's say tat we have a basic react app, with the follwoing structure:
```bash
Root
├── public
│   └── index.html
├── src
│   ├── Components
│   │   ├── ChildA
│   │   │   ├── ChildA.jsx
│   │   │   └── style.css
│   │   ├── ChildB
│   │   │   ├── ChildB.jsx
│   │   │   └── style.css
│   │   └── Header
│   │       ├── Header.jsx
│   │       └── style.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```


To add Routing in React App, `react-router-dom` is the most popular tool.


```bash
npm i react-router-dom
```

From this package, `BrowserRouter`, `Routes` and `Route` components can be imported.

All Components, that need to be show/hide in application must be inside `Routes` Component.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/LINK_HERE" element={COMPONENT} />
                    <Route path="/LINK_HERE" element={COMPONENT} />
                    ...
                    <Route path="/LINK_HERE" element={COMPONENT} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
```

<hr />

## Link, Navigate In React 

using `react-router-dom` package, a `Link` component can be imported, and used to switch between components, instead of `<a></a>` element in html, which mages a get request, and reloading the page with new content.

`Link` component will update the `URL` without reloading the page.

```jsx
    import {Link} from 'react-router-dom'

    const Component = props=>{
        return(
            <>
                ...
                ...
                <Link to="/PATH">LINK_TEXT_CONTENT</Link>
            </>
        )
    }
```

> Important Note: `Link` Component or the father for `Link` must be inside `BrowserRouter` Component

The rendering for `Link` Component will be as `<a>` in browser, then it's clickable liike a link, but `NO PAGE RELOADING`.

<hr />

## Redirecting In React

A hook function `useNavigate` could be imported from `react-router-dom` package, this will let react/javascript to change the url in runtime, with events or condition

```jsx
import {useNavigate} from 'react-router-dom'
const Component = props=>{
    const navigate = useNavigate();

    const someHandler = (){
        ...
        ...
        navigate("/somePath")
    }

    return(
        <>
            ...
            ...
            ...
        </>
    )
}
```

<hr />

## General URL Case

> In `Route` Component, usualy a `Route` component will be added for none existing resources, like for other cases in url (404) in websites, to add it, a `*` should be as path prop:

```jsx
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            ...
            ...
            <Route path="/*" element={<NotFoundComponent/>} />
        </Routes>
    </BrowserRouter>
```

<hr />

## Params in React Router Dom

Params are placeholders in the URL that begin with a colon, like the `:id` param defined in the route in this example. A similar convention is used for matching dynamic segments in other popular web frameworks like Rails and Express.

To use `params` in `react-router-dom`, a hook finction could be used `useParams`.

```jsx
<BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            ...
            <Route path="/SOME_PATH/PARAM_NAME" element={<SOMECOMPONENT/>} />
            {/* Example: "localhost:3000/SOME_PATH/ANY"*/}
            ...
            <Route path="/*" element={<NotFoundComponent/>} />
        </Routes>
    </BrowserRouter>
```

to read the param in `SOMECOMPONENT`:

```jsx
import {useParams} from 'react-router-dom'

const SOMECOMPONENT = props=>{
    const param = useParams()
    console.log(param)//==> wil show anything in url after "SOME_PATH" as an object: {PARAM_NAME: "ANY_THING_AFTER_SOME_PARAM"}
    return(
        ...
        ...
        ...
    )
}
```

<hr/>

## Query in React Router Dom
> Same for `params` but with query string `?` to read the data from.

Example:
`lokalhost:3000/path?name=john&age=20`

To read it in Component, a hool function can be used `useQuery` from `react-router-dom`:

```jsx
import {useQuery}  from 'react-router-dom'

const SOMECOMPONENT = props=>{
    const query = useQuery();
    console.log(query)// ==> will log the query: {name: "john", age: "20"}

    return(
        <>
            ...
            ...
            ...
        </>
    )
}

```