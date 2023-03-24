(function () {
  let counter = 0;
  let users = [];

  window.addUser = (user) => {
    users.push(user);
    counter++;
    console.log(`${counter} users`);
  };
})();
