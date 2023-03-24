
# SPA - Async - Day 4



- Yesterday
  - fetch()


- Today
  - Cross Origin Requests
  - Saving data in the browser



- CORS = Cross-Origin Resource Sharing


- "CORS is an HTTP-header based mechanism that allows servers to indicate which origins are browsers allowed to make requests from"



- For security purposes, when on website X, CORS does not allow scripts to request data from website Y

  - A few other things are affect, but we are focusing on requests made by fetch() to API endpoints


  - This is called the same-origin policy



- So if you are on jayhax.com you cannot access my-bank.com

 - You might be logged into your bank and jayhax.com would download all your data!
  - jayhax.com cannot load YOUR facebook or YOUR bank using YOUR browser

  - Requests ARE allowed between the same origin, though
  - when on facebook.com, you can do requests to facebook.com/user


- The origin of the site consists of


  - the scheme or protocol (http / https) - http://joelhax.com vs https://joelhax.com

  - the hostname / domain name (localhost / facebook.com / mybank.de)

  - the port (80, 3000, 8080, 5501, etc) - http://joelhax.com:3000 vs http://joelhax.com:8080


- However, servers can specifically allow you to request their data from any origin OR Specific origins


  - This is usually done from public APIs, such as the API for getting twitter messages
  - Servers can also allow for example GET requests, but not POST requests


  - `fetch("https://some-random-proxy.com/api.facebook.com/user")`



- Browsers actually check if a server allows cross-origin requests by doing a "preflight request"

  - Mostly these things are automatic, so don't worry about it :)



## Saving Data (in 

- Web Storage API

  - 2 ways of saving data to the browser: `localStorage` and `sessionStorage`

  - Both are tied to the domain (I think :D)


- VERY SIMILAR


  - data is saved as key/value pairs of strings

  - `Storage.setItem(<key>, <value>)`
  - `Storage.getItem(<key>);`
  - `Storage.removeItem(<key>);`
  - `Storage.clear()`


### SessionStorage


- Page is loaded in tab; this creates a tab "session" for that tab


- These "tab sessions" last as long as the tab is not closed

    - Reloads do not remove this session
    - Page changes (in the same domain) do not remove this session

    - Ssession cleared / removed when the tab close


 Opening multiple tabs EVEN with the same domain opens new SessionStorage sessions
- Duplicating a tab duplicates the sessionstorage session of the tab as well



### LocalStorage

- like sessionStorage, but....

  - doesn't expire when the tab closes

  - shared between tabs (in the same domain)



### Use cases


- User switches site language --> we save the current language into localStorage
- User accepts cookies --> we save the "accept" selection into localStorage

- User switches site theme --> we save the current theme into localStorage
- User logs in --> we save the current user into localStorage (we will do this later!)


- User writes someting in an input and we want to store that value (to sessionStorage?)

