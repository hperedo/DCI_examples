# Blog

## Description

> This project to enable writing posts, store them in MongoDB, allow also comments on each post.

## 1. Post
    - anybody can write a post.
    - anybody can edit the post.
    - anybody can delete the post.
    - Post: 
        - title
        - author
        - date
        - comments
        - content (text)
        - category

## 2. Comment
    - anyone can write a comment
    - Comment:
        - name (who write it)
        - post_id
        - comment (content)
        - date

## (backend) Endpoints

> API, `/api/WHAT_EVER`

### For Post:
    1- `/api/posts` method `post`, to create a new post
    2- `/api/posts` method `get`, to get all posts
    3- `/api/posts/ANY_POST_ID`, method is `get`, to get a specific post by id
    4- `/api/posts/edit/`, method `put`, to update the post.
    5- `/api/posts/delete`, method `delete`, to delete post by id.