# Backend - Security - Day 3


- Yesterday

 - Security concepts : validation super duper deep in it 


 - somethings still need to be covered !!

   - Sanitation /  sanitization / sanitize
   - body("email").normalizeEmail()l.isEmai(),isWhiteListed



    ## DDOS Attacks 

- Today

  - Authentication!

## Authentication and Authorization

- Authentication: identifying a person
- Authorization: managing access to features/data based on the person using a service
    - Also called Access control


- To authorize, we need to authenticate
- To authenticate, we need to make sure a person is who they claim to be


- It's still very common to have a simple username-password login

    - That _is_ being challenged by alternative solutions


- Some web apps don't even have a password at all 
    - Or they require some kind of multi factor Authentication
    - Two Factor authentication == 2FA
    - This requires at least two pieces of evidence to proceed with the authentication
    - The steps of authentication should require something different
        - Who you are: fingerprint, iris sensor, facial recognition... (biometrics)
        - What you know: password, swiping gesture, PIN
        - What you have: physical key, physical device, list of codes

- No password?
    - They would just do "login with facebook" / "login with google"
    - In Iran it's common to see "Login with bank credentials"
    - These services are "offloading" the authenticating to FB/Google/Bank/etc
        - They trust those to keep the identity checking secure so they don't have to :)

- Before we jump into logins, we need to know about...


# Cryptography: Encryption and Hashing


- Two different things


- Encryption
    - Can be reversed
    - Making something unrecognizable
    - Same input always gives same output
    - Many different algorithms (methods of encryption)



- Hashing
    - Can NOT be reversed
    - Making something unrecognizable
    - Same input always gives same output
    - Many different algorithms (methods of hashing)
    - The outcome is called a hash

- Example of extremely simple encryption: ROT-13

 - https://rot13.com/


 - Example of basic hashing: SHA256
    - Use SHA-something or AES-something
    - SHA-1 is maybe not the best, though
    - If you see `md5` just don't use that one anymore :)

    - https://passwordsgenerator.net/sha256-hash-generator/
    - "Military grade encryption" === something like AES256 or SHA512


    - Hashing is often done with multiple inputs

    - This is called "Salting"

    - You might have another string (like the email) added to your password
    - That way if two users have the same password, their hashes will still be different

    - https://betterprogramming.pub/salting-and-hashing-explained-b76f5af83554


- Instead of salts, multiple rounds of hashing is also used

    - Sometimes the hash is even done multiple times to increase security
        - Doing hashing with a good algorithm many times can be heavy for the computer
        - Meaning too many times will cause performance issues


- Don't encrypt passwords. Hash passwords. And then save them in your database.


    - That way even administrators cannot ever see your password in any way
    - And we have to set a new password instead of the app telling us our old one

    - Unless you are a math genius, avoid writing cryptographic algorithms yourself :)





## Interested in more deeper dive into security, hacking, cracking etc?

- Check out DEF CON talks
  - Ranging from extremely technical to social
  - https://www.youtube.com/user/DEFCONConference/playlists



# Let's create a tiny backend API with a mini "login"!
