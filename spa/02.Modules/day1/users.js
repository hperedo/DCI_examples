let counter = 0;
const users = [];

export default function addUser(user) {
  users.push(user);
  counter++;
  console.log(`${counter} users`);
}
