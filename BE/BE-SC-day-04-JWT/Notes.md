# Backend - Security - Day 4


## Schedule

- Last time
  - Crypto basics; encryption and hashing

- next week (probably)
  - JWT
  - More login stuff
  - File uploads
  - Cookies


## Issue with our previous live coding "login"

- HTTP is a stateless protocol
  - Requests are all individuals
  - Everything required to process a request must come with it


- How will the backed know the _NEXT_ request comes from an authenticated source?


- Solution: the request has to carry something to identify itself
  - The backend will give you a token

  - /login ---- pw: 123, username: Jay ---> BE gives you a [token]
- /admin ---- [token] ----> 


## JWT = JSON Web Tokens

- JWT is a standard
- JSON WEB TOKEN - basically a string of text
- Token will look like AAAAAAA.BBBBBB.CCCCCC
- [Header].[Payload].[Signature]
- Secure transmission of data by signing data with a secret string
- Secret must be kept secret!
- Token must be stored securely! (Or as securely as possible!)



- **Header**
- The header typically consists of two parts
  - the token type (JWT)
  - the signing algorithm being used, such as HMAC SHA256 or RSA
- `{"alg": "HS256", "typ": "JWT" }`


- **Payload**
- The second part of the token is the payload, which contains the "claims"
- Claims are statements about an entity (typically, the user) and additional data
- There are three types of claims: registered, public, and private claims.
- The details of the kind of claims in the payload is for self-study :) 


```json
{
    "sub": "1234567891", // "Registered claim"
    "name": "Rauli Cat", // "Public claim"
    "admin": true // "Public claim"
}
```


-**Signature**


- The signature is used to verify the message wasn't changed along the way


- Let's make a JWT! https://jwt.io/#debugger-io


## LINKS

- JWT introduction: https://jwt.io/introduction
- JWT debugger tool: https://jwt.io/#debugger-io
- JWT standard: https://tools.ietf.org/html/rfc7519
- (Advanced) JWT token storage in browser: https://stackoverflow.com/questions/27067251
