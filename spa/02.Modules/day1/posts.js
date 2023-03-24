let counter = 0;
const posts = [];

export function addPost(post) {
  posts.push(post);
  counter++;
  console.log(`${counter} posts`);
}
