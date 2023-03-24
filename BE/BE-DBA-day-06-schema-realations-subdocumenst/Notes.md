# Backend - Database Advanced - Day 6 

- LasT time
 - Error Handling, Deleteing , updating

 - Today
  - Continuing with the same project but with a new freshly updated repo
  - Subdocuments
  - Relations


## Subdocuments

- Nesting in a Schema
  - One field/path being an object with a specific structure


> Subdocuments are documents embedded in other documents. In Mongoose, this means you can nest schemas in other schemas. Mongoose has two distinct notions of subdocuments: arrays of subdocuments and single nested subdocuments.


> Subdocuments are similar to normal documents. -- The major difference is that subdocuments are not saved individually, they are saved whenever their top-level parent document is saved.

> https://mongoosejs.com/docs/subdocs.html

## Document relations with Mongoose

- More powerful than subdocuments: Relationships

- Relationship types

  - One-to-One ----- one country has one capital, one capital has one country
  - One-to-Many ---- one country has many cities, one city has one country
  - Many-to-Many --- one article has many tags, one tag has many articles
