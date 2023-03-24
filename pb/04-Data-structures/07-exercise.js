/// List the total items in the cart for a given user

const carts = [
  {
    // 1
    user: 'Alkis',
    product: 'hat',
    quantity: 3,
  },
  {
    // 2
    user: 'Alkis',
    product: 'shoes',
    quantity: 2,
  },
  {
    // 3
    user: 'Jim',
    product: 'hat',
    quantity: 3,
  },
  {
    // 4
    user: 'John',
    product: 'watch',
    quantity: 3,
  },
  {
    // 5
    user: 'Jim',
    product: 'watch',
    quantity: 3,
  },
  {
    // 6
    user: 'Julie',
    product: 'hat',
    quantity: 3,
  },
  {
    // 7
    user: 'Alkis',
    product: 'Coat',
    quantity: 3,
  },
  {
    // 8
    user: 'Alkis',
    product: 'Scarf',
    quantity: 3,
  },
  {
    // 9
    user: 'Alkis',
    product: 'Bag',
    quantity: 3,
  },
  {
    // 10
    user: 'Alkis',
    product: 'watch',
    quantity: 3,
  },
];

function getTotalItems(userName) {
  let total = 0;

  for (let item of carts) {
    if (item.user === userName) {
      total += item.quantity;
    }
  }
  return `${userName} has ${total} items in cart`;
}

console.log(getTotalItems('Alkis')); // Alkis has 17 items in cart

console.log(getTotalItems('Jim')); // Jim has 6 items in cart
