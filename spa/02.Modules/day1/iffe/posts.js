(function () {
  let counter = 0;
  const posts = [];

  window.addPost = (post) => {
    posts.push(post);
    counter++;
    console.log(`${counter} posts`);
  };
})();
