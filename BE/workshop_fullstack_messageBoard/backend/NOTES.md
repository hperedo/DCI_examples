# Backend - Security - Day 7

## File uploads: multipart requests

- Basic HTML forms where the `method="POST"` can be sent in 2 main ways
      <!-- mime Types -->
    - `<form method="POST" ... enctype="application/x-www-form-urlencoded">`
         - Default, basically string of key-value pairs
             - `<form method="POST" ... enctype="multipart/form-data">`
                     - Used if the form contains file inputs


  ## Frontend
      - First... there is a thing called FormData
      - FormData is a tool built into browsers
      - It helps developers work with JS the way a standard HTML form works
      - Basically FormData bundles up data to be sent to an API

  ## Backend
  - Now our backend needs to understand multipart requests
  - Introducing `multer` to handle file uploads (multipart requests)
  - Usually you don't save *files* to the database, rather you save file paths to DB
  
  ## Security note